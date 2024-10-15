import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    productId: {
        ref: 'product',
        type: String
    },
    quantity: Number,
    userId: String
}, {
    timestamps: true
});

export default mongoose.model('cart', cartSchema);