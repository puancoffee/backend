const Order = require('../models/order')
const Detail = require('../models/detail')

module.exports = ({
    create: ((req, res, next) => {
        Detail
            .findOne({
                id: req.body._id
            })
            .then(detail => {
                if (!detail) {
                    return res
                        .status(400)
                        .json({
                            detail: "Detail Not exist"
                        })
                } else {
                    const order = new Order({
                        name: req.body.name,
                        products: req.body.products
                    })
                    order
                        .save()
                        .then(order => {
                            res.json(order)
                        })
                        .catch(error => {
                            res.json(error)
                        })
                }
            })
    }),
    showOrder: ((req, res, next) => {
        Order.find({}).populate('name', ['name', 'email', 'phone']).populate({
                path: 'products',
                populate: {
                    path: 'product',
                    populate: {
                        path: 'category',
                    }
                }
            }).then(detail => {
                res.json(detail)
            })
            .catch(error => {
                res.json(error)
            })
    })
})