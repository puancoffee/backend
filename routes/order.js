const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order')

/* Add new order . */
router.post('/order', orderController.create)

/* Show data order . */
router.get('/order', orderController.showOrder)

module.exports = router;