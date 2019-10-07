const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    nama: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    detail: {
        type: Schema.Types.ObjectId,
        ref: 'detail'
    }
})

module.exports = mongoose.model('order', orderSchema)