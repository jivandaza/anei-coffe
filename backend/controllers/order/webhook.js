import Order from '../../models/orderModel.js';
import stripe from '../../config/stripe.js';
import deleteCart from "../cart/deleteCart.js";

const endpointSecret = process.env.STRIPE_ENDPOINT_WEBHOOK_SECRET_KEY;

async function getLineItems (lineItems) {
    let productItems = [];

    if (lineItems?.data?.length) {
        for (const item of lineItems?.data) {
            const product = await stripe.products.retrieve(item.price.product);
            const productId = product.metadata.productId;

            const productData = {
                productId: productId,
                name: product.name,
                price: item.price.unit_amount / 100,
                quantity: item.quantity,
                images: product.images
            }

            productItems.push(productData);
        }
    }

    return productItems;
}

const webhooks = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    
    const payloadString = JSON.stringify(req.body);

    const header = stripe.webhooks.generateTestHeaderString({
        payload:  payloadString,
        secret: endpointSecret
    });

    let event;

    console.log(endpointSecret);

    try {
        event = stripe.webhooks.constructEvent(payloadString, header, endpointSecret);
    } catch (error) {
        res.status(400).send(`Webhook Error ${error.message}`);
        return;
    }

    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;

            const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

            const productDetails = await getLineItems(lineItems);

            const orderDetails = {
                productDetails,
                email: session.customer_email,
                userId: session.metadata.userId,
                paymentDetails: {
                    paymentId: session.payment_intent,
                    payment_method_types: session.payment_method_types,
                    payment_status: session.payment_status
                },
                shipping_options: session.shipping_options.map(s => {
                    return {
                        ...s,
                        shipping_amount: s.shipping_amount / 100
                    }
                }),
                totalAmount: session.amount_total / 100
            }

            const order = new Order(orderDetails);

            await order.save();

            await deleteCart(session.metadata.userId);

            break;
        default:
            console.log(`unhandled event type: ${event.type}`);
    }

    res.status(200).send();
};

export default webhooks;