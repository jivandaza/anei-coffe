const validateProductFields = (product) => {
    if (!product.name) {
        return { status: 400, error: 'El nombre es obligatorio' };
    }
    if (product.image.length === 0) {
        return { status: 400, error: 'Cargar mínimo una imagen' };
    }
    if (!product.price) {
        return { status: 400, error: 'El precio es obligatorio' };
    }
    if (parseInt(product.price) <= 0) {
        return { status: 400, error: 'El precio debe ser mayor a cero' };
    }
    if (!product.description) {
        return { status: 400, error: 'La descripción es obligatoria' };
    }
    return null;
};

export default validateProductFields;