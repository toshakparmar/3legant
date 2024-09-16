const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {   
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000,
        default: '',
    },
    image: {
        type: String,
        default: '',
    },
    images: [{
        type: String,
    }],
    brand: {
        type: String,
    },
    price: {
        type: Number,
        default: 0,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    }, 
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('products', productSchema);
module.exports = Product;