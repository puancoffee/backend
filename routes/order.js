const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order')

/* Login Users . */
router.post('/order', orderController.create)

module.exports = router;