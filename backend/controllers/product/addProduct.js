import validateProductFields from '../../helpers/validateProductFields.js';
import ProductModel from './../../models/productModel.js';

const addProduct = async (req, res) =>{
    try {
        const validateFields = validateProductFields(req?.body);

        if (validateFields) {
            return res.status(validateFields.status).json({ error: validateFields.error });
        }

        const product = new ProductModel(req.body);
        await product.save();

        res.status(201).json({
            message : "Agregado Exitosamente"
        });
    } catch (error) {
        console.log(error.message || error);

        res.status(500).json({
            error: 'Ocurrió un error, intenta más tarde'
        });
    }
};

export default addProduct;