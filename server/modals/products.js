import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    sku: {
        type: Number,
    },
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Products = mongoose.model('products', ProductsSchema);
export default Products;
