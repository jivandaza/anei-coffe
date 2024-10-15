import ProductModel from "../../models/productModel.js";

const getProduct = async (req, res) => {
    try {
        const product = await ProductModel.findById(req?.params?.id);

        if (!product) {
            return res.status(400).json({
                error: 'El producto no existe'
            });
        }

        return res.status(200).json({
            product
        });
    } catch (error) {
        console.log(error.message || error);

        res.status(500).json({
            error: 'Ocurrió un error, intenta más tarde'
        });
    }
};

export default getProduct;