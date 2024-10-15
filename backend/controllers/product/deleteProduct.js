import ProductModel from "../../models/productModel.js";
import cloudinary from "cloudinary";
import dotenv from 'dotenv';

dotenv.config();

cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const deleteProduct = async (req, res) => {
    const id = req?.params?.id;

    try {
        const product = await ProductModel.findById(id);

        if (product) {
            // Extraer las operaciones de eliminación de imágenes
            const deleteImagePromises = product.image.map(async (image) => {
                const segments = image.split('/');
                const publicIdWithExtension = segments[segments.length - 1];
                const publicId = publicIdWithExtension.split('.')[0];

                return cloudinary.v2.api.delete_resources([`mernProduct/${publicId}`], {
                    resource_type: 'image',
                    type: 'upload'
                });
            });

            // Esperar a que todas las imágenes sean eliminadas
            await Promise.all(deleteImagePromises);

            await ProductModel.findByIdAndDelete(id);
            res.status(200).json({ message: 'Eliminado exitosamente' });
        } else {
            res.status(404).json({ error: 'Producto no existe' });
        }
    } catch (error) {
        console.log(error.message || error);

        res.status(500).json({
            error: 'Ocurrió un error, intenta más tarde'
        });
    }
};

export default deleteProduct;