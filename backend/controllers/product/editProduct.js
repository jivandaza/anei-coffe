import ProductModel from "../../models/productModel.js";
import validateProductFields from "../../helpers/validateProductFields.js";

const editProduct = async (req, res) => {
    try {
        const product = await ProductModel.findById(req?.body?._id);

        if (!product) {
            return res.status(404).json({error: 'El producto no existe'});
        }

        const validateFields = validateProductFields(req?.body);

        if (validateFields) {
            return res.status(validateFields.status).json({ error: validateFields.error });
        }

        const { _id, ...resBody } = req?.body;

        await ProductModel.findByIdAndUpdate(_id, resBody);

        res.status(200).json({
            message: 'Editado exitosamente'
        });
    } catch (error) {
        console.log(error.message || error);

        res.status(500).json({
            error: 'Ocurrió un error, intenta más tarde'
        });
    }
};

export default editProduct;