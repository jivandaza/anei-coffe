import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const deleteImage = async (req, res) => {
    const { public_id } = req.body;

    try {
        await cloudinary.v2.api.delete_resources([`mernProduct/${public_id}`], {
            resource_type: 'image',
            type: 'upload'
        }).then(() => {
            res.status(200).json({ message: 'Imagen eliminada' });
        }).catch(() => {
            res.status(400).json({ error: 'Error al eliminar la imagen' });
        });
    } catch (error) {
        console.log(error.message || error);

        res.status(500).json({
            error: 'Ocurrió un error, intenta más tarde'
        });
    }
};

export default deleteImage;