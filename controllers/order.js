const Order = require('../models/order')
const Detail = require('../models/detail')

module.exports = ({
    create: ((req, res, next) => {
        Detail
            .findOne({id: req.body._id})
            .then(detail => {
                if (!detail) {
                    return res
                        .status(400)
                        .json({detail: "Detail Not exist"})
                } else {
                    const order = new Order({name: req.body.name, detail: req.body.detail})
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
    })
})