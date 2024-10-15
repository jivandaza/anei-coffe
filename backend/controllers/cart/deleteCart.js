import CartModel from '../../models/cartModel.js';

const deleteCart = async (idUser) => {
    try {
        await CartModel.deleteMany({userId: idUser});
    } catch(error) {
        console.log(error.message || error);
    }
};

export default deleteCart;