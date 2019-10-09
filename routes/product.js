const express = require('express');
const router = express.Router();

const productController = require('../controllers/product')

/* Add Product . */
router.post('/product', productController.create)

/* Show Product . */
router.get('/product', productController.showProduct)
module.exports = router;