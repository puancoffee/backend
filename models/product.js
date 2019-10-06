const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type:Schema.Types.ObjectId,
        ref: 'category'
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    images: {
        type: String
    },

})
module.exports = mongoose.model('product', productSchema)