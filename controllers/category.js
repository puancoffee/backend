const Category = require('../models/category')

module.exports = ({
    create : ((req, res, next) => {
      Category.create({
            name : req.body.name,
        },
        function(err, result){
            if(err)
            next(err)
            else res.json(result)
        })
    })
})