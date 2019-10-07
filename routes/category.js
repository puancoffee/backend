const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/category')

/* Login Users . */
router.post('/category', CategoryController.create)

module.exports = router;