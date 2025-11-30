import Order from '../../models/orderModel.js';

const updateStatus = async (req, res) => {
    try {
        const { id, newStatus } = req.body;

        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({
                error: 'Orden no encontrada',
            });
        }

        order.status = newStatus;
        await order.save();

        res.status(200).json({
            message: 'Estado de la orden actualizado'
        });
    } catch (error) {
        console.log(error.message || error);

        res.status(500).json({
            error: 'Ocurrió un error, intenta más tarde',
        });
    }
};

export default updateStatus;