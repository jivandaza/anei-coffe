import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    image: [],
    description: String,
    price: Number
}, {
    timestamps: true
});

export default mongoose.model('product', productSchema);