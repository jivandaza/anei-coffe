import CartModel from '../../models/cartModel.js';

const editQuantityToCart = async (req, res) => {
    try {
        const { cartId } = req?.body;

        const existCart = await CartModel.findById(cartId);

        if (!existCart) {
            return res.status(404).json({error: 'Producto no encontrado'});
        }

        const qty = req?.body?.quantity;

        await CartModel.updateOne({_id : cartId}, {
            ...(qty && {quantity: qty})
        });

        return res.sendStatus(200);
    } catch(error) {
        console.log(error.message || error);

        res.status(500).json({
            error: 'Ocurrió un error, intenta más tarde'
        });
    }
};

export default editQuantityToCart;