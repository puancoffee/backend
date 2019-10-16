const Category = require('../models/category')
const Product = require('../models/product')

module.exports = ({
    create: ((req, res, next) => {
        Category.create({
                name: req.body.name,
            },
            function (err, result) {
                if (err)
                    next(err)
                else res.json(result)
            })
    }),
    showCategory: ((req, res, next) => {
        Category.aggregate([
            {
              $lookup:
                {
                  from: "products",
                  localField: "name",
                  foreignField: "_id",
                  as: "productRef"
                }
           },
           { $match : { _id : _id } }
        ]).then(detail => {
            res.json(detail)
            .catch(error => {
                res.json(error)
            })
        })
        // Category.find({}).then(detail => {
        //         res.json(detail)
        //     })
        //     .catch(error => {
        //         res.json(error)
        //     })
    })
})