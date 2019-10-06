const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/category')

/* Login Users . */
router.post('/', CategoryController.create)

module.exports = router;