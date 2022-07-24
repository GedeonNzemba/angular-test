import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PricesSchema = new Schema({
    sku: {
        type: Number,
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Prices = mongoose.model('prices', PricesSchema);
export default Prices;
