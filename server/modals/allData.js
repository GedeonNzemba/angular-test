import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AllDataSchema = new Schema({
    sku: {
        type: Number,
    },
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number,
    }
});

const AllData = mongoose.model('AllData', AllDataSchema);
export default AllData;
