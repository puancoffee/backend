const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order')

/* Login Users . */
router.post('/', orderController.create)

module.exports = router;