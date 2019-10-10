const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    name: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    products: {
        type: Schema.Types.ObjectId,
        ref: 'detail'
    }
})

module.exports = mongoose.model('order', orderSchema)