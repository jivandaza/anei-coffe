const backendDomain = process.env.REACT_APP_BACKEND_URL;

export const authApi = {
    register: {
        url: `${backendDomain}/api/auth/register`,
        method: 'post'
    },
    login: {
        url: `${backendDomain}/api/auth/login`,
        method: 'post'
    },
    logout: {
        url: `${backendDomain}/api/auth/logout`,
        method: 'get'
    }
}

export const userApi = {
    getUser: {
        url: `${backendDomain}/api/user`,
        method: 'get'
    },
    getAllUser: {
        url: `${backendDomain}/api/users`,
        method: 'get'
    }
}

export const productApi = {
    addProduct: {
        url: `${backendDomain}/api/product`,
        method: 'post'
    },
    getAllProduct: {
        url: `${backendDomain}/api/products`,
        method: 'get'
    },
    getProduct: {
        url: `${backendDomain}/api/product`,
        method: 'get'
    },
    editProduct: {
        url: `${backendDomain}/api/product`,
        method: 'put'
    },
    deleteProduct: {
        url: `${backendDomain}/api/product`,
        method: 'delete'
    },
    deleteImageProduct: {
        url: `${backendDomain}/api/product/image`,
        method: 'delete'
    }
}

export const cartApi = {
    addProductToCart: {
        url: `${backendDomain}/api/cart`,
        method: 'post'
    },
    allProductsToCart: {
        url: `${backendDomain}/api/cart`,
        method: 'get'
    },
    countProductsToCart: {
        url: `${backendDomain}/api/cart/count`,
        method: 'get'
    },
    editQuantityToCart: {
        url: `${backendDomain}/api/cart`,
        method: 'put'
    },
    deleteProductToCart: {
        url: `${backendDomain}/api/cart`,
        method: 'delete'
    }
}

export const orderApi = {
    paymentOrder: {
        url: `${backendDomain}/api/checkout`,
        method: 'post'
    },
    allOrderByUserCtrl: {
        url: `${backendDomain}/api/order/user`,
        method: 'get'
    },
    allOrder: {
        url: `${backendDomain}/api/order`,
        method: 'get'
    },
    updateOrderStatus: {
        url: `${backendDomain}/api/order/update-status`,
        method: 'put'
    }
}