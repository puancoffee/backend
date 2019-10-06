const Product = require('../models/product')
const Category = require('../models/category')
const validateCreateInput = require('../validation/product')
module.exports = ({
    create: ((req, res, next) => {
        const {errors, isValid} = validateCreateInput(req.body)
        if (!isValid) {
            return res
                .status(400)
                .json(errors)
        }
        Category
            .findOne({id: req.body._id})
            .then(category => {
                console.log(category);
                if (!category) {
                    return res
                        .status(400)
                        .json({category: "Category Not exists"})
                        
                } else {
                    const product = new Product({
                        name: req.body.name,
                        description: req.body.description,
                        category: req.body.category,
                        date: req.body.date,
                        time: req.body.time,
                        price: req.body.price
                    })
                    product
                        .save()
                        .then(product => {
                            res.json(product)
                        })
                        .catch(error => {
                            res.json(error)
                        })
                }
            })
    })
})