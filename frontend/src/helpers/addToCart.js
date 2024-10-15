import { cartApi } from "../common";
import toastr from "toastr";

const addToCart = async (id, handleSessionClosed) => {

    const response = await fetch(cartApi.addProductToCart.url, {
        method: cartApi.addProductToCart.method,
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            productId: id
        })
    });

    const data = await response.json();
    const status = response.status;

    if (response.ok) {
        toastr.success(data.message);
    } else if ( status === 400 || status === 500 ) {
        toastr.error(data.error);
    } else {
        handleSessionClosed(data.error);
    }
};

export default addToCart;