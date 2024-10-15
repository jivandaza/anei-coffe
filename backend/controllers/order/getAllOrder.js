import Order from '../../models/orderModel.js';

const getAllOrder = async (req, res) => {
    try {
        const orders = await Order.find().sort({createdAt: -1});

        res.status(200).json({
            orders
        });
    } catch (error) {
        console.log(error.message || error);

        res.status(500).json({
            error: 'Ocurrió un error, intenta más tarde',
        });
    }
};

export default getAllOrder;