const Detail = require('../models/detail')
const Product = require('../models/product')
const validateCreateInput = require('../validation/detail')
module.exports = ({
    create: ((req, res, next) => {
        const {
            errors,
            isValid
        } = validateCreateInput(req.body)
        if (!isValid) {
            return res
                .status(400)
                .json(errors)
        }
        Product
            .findOne({
                id: req.body._id
            })
            .then(product => {
                console.log(product);
                if (!product) {
                    return res
                        .status(400)
                        .json({
                            product: "Product Not exists"
                        })

                } else {
                    const detail = new Detail({
                        product: req.body.product,
                        name: req.body.name,
                        date: req.body.date,
                        time: req.body.time,
                        location: req.body.location
                    })
                    detail
                        .save()
                        .then(detail => {
                            res.json(detail)
                        })
                        .catch(error => {
                            res.json(error)
                        })
                }
            })
    }),
    showDetails: ((req, res, next) => {
        Detail.find({})
        .populate({
            path: 'product',
        populate:{
            path: 'category',
        }})
        .then(detail => {
            res.json(detail)
        })
        .catch(error => {
            res.json(error)
        })
    }),
    showDetailsById: ((req, res, next) => {
        Detail.findById(req.params.detailId)
        .populate({
            path: 'product',
        populate:{
            path: 'category',
        }})
        .then(detail => {
            res.json(detail)
        })
        .catch(error => {
            res.json(error)
        })
    })
})