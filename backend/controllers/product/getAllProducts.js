import ProductModel from './../../models/productModel.js';

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find().sort({createdAt: -1});

        return res.status(200).json({
            products
        });
    } catch (error) {
        console.log(error.message || error);

        res.status(500).json({
            message: 'Ocurrió un error, intenta más tarde'
        });
    }
};

export default getAllProducts;