import CartModel from '../../models/cartModel.js';

const addProductToCart = async (req, res) => {
    try {
        const   { productId }     = req?.body;
        const   currentUser       = req?.userId;

        const isProductAvailable = await CartModel.findOne({ productId });

        if( isProductAvailable ){
            return res.status(400).json({error: 'Producto ya esta agregado'});
        }

        const payload  = {
            productId,
            quantity : 1,
            userId : currentUser,
        };

        const addToCartProduct = new CartModel(payload);

        await addToCartProduct.save();

        return res.status(200).json({
            message : 'Producto agregado'
        });
    } catch (error) {
        console.log(error.message || error);

        res.status(500).json({
            error: 'Ocurrió un error, intenta más tarde'
        });
    }
};

export default addProductToCart;