import CartModel from '../../models/cartModel.js';

const deleteProductToCart = async (req, res) => {
    const id = req?.params?.id;

    try {
        const existCart = await CartModel.findById(id);

        if (!existCart) {
            return res.status(404).json({error: 'Producto no encontrado'});
        }

        await CartModel.deleteOne({_id: id});

        return res.sendStatus(200);
    } catch(error) {
        console.log(error.message || error);

        res.status(500).json({
            error: 'Ocurrió un error, intenta más tarde'
        });
    }
};

export default deleteProductToCart;