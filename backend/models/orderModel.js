import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    productDetails: {
        type: Array,
        default: []
    },
    email: {
        type: String,
        default: ''
    },
    userId: {
        type: String,
        default: ''
    },
    paymentDetails: {
        paymentId: {
            type: String,
            default: ''
        },
        payment_method_types: [],
        payment_status: {
            type: String,
            default: ''
        }
    },
    city: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    zipCode: {
        type: Number,
        default: ''
    },
    shipping_options: [],
    totalAmount: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: 'processing'
    }
}, {
    timestamps: true
});

export default mongoose.model('order', orderSchema);