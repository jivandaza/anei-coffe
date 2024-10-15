import { productApi }       from '../common';

export const uploadImageCloudinary = async (image) => {
    const urlAPI = `https://api.cloudinary.com/v1_1/dabdlceqg/image/upload`;
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'mern_product');

    const response = await fetch(urlAPI, {
        method: 'post',
        body: formData
    });

    return response.json();
};

export const deleteImageCloudinary = async (imageUrl, handleSessionClosed) => {
    // Extraer public_id de la URL
    const segments = imageUrl.split('/');
    const publicIdWithExtension = segments[segments.length - 1];
    const publicId = publicIdWithExtension.split('.')[0];

    const response = await fetch(productApi.deleteImageProduct.url, {
        method: productApi.deleteImageProduct.method,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ public_id: publicId })
    });

    const data = await response.json();

    if (response.ok) {
        return data.message;
    } else if (response.status === 400) {
        return data.error;
    } else {
        await handleSessionClosed(data.error);
        return null;
    }
};

