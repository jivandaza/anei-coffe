import CartModel from '../../models/cartModel.js';

const countProductsToCart = async (req, res) => {
    try {
        const userId = req?.userId;

        const count = await CartModel.countDocuments({
            userId
        });

        return res.status(200).json({
            count
        });
    } catch (error) {
        console.log(error.message || error);

        res.status(500).json({
            error: 'Ocurrió un error, intenta más tarde'
        });
    }
};

export default countProductsToCart;