const express = require('express');
const router = express.Router();

const productController = require('../controllers/product')

/* Login Users . */
router.post('/product', productController.create)

module.exports = router;