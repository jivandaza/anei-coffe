import CartModel from '../../models/cartModel.js';

const allProductsToCart = async (req, res) => {
    try {
        const { userId } = req;

        const productsToCart = await CartModel.find({
            userId
        }).populate("productId");

        return res.status(200).json({
            productsToCart
        });
    } catch (error) {
        console.log(error.message || error);

        res.status(500).json({
            error: 'Ocurrió un error, intenta más tarde'
        });
    }
};

export default allProductsToCart;