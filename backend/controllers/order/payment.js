import stripe from '../../config/stripe.js';
import UserModel from "../../models/userModel.js";

const paymentCtrl = async (req, res) => {
    const { cartItems, locationDetails } = req?.body;

    try {
        const user = await UserModel.findOne({_id: req.userId});

        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                {
                    shipping_rate: 'shr_1Q2cIVFG7WrK615jrf34bmZi'
                }
            ],
            customer_email: user?.email,
            metadata: {
                userId: req.userId,
                city: locationDetails.city,
                address: locationDetails.address,
                zipCode: locationDetails.zipCode
            },
            line_items: cartItems.map((item) => {
                return {
                    price_data: {
                        currency: 'cop',
                        product_data: {
                            name: item?.productId?.name,
                            images: item?.productId?.image,
                            metadata: {
                                productId: item?.productId?._id
                            }
                        },
                        unit_amount: item?.productId?.price * 100
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1
                    },
                    quantity: item?.quantity
                }
            }),
            success_url: `${process.env.CLIENT_URL}/payment/success`,
            cancel_url: `${process.env.CLIENT_URL}/payment/cancel`
        }

        const session = await stripe.checkout.sessions.create(params);

        res.status(303).json(session);
    }  catch (error) {
        console.log(error.message || error);

        res.status(500).json({
            error: 'Ocurrió un error, intenta más tarde',
        });
    }
};

export default paymentCtrl;