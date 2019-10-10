const mongoose = require('mongoose')
const Schema = mongoose.Schema

const detailSchema = new Schema({
    product: {
        type:Schema.Types.ObjectId,
        ref: 'product'
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('detail', detailSchema)