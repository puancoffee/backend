const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/category')

/* Add new category . */
router.post('/category', CategoryController.create)

/* show data category . */
router.get('/category', CategoryController.showCategory)
module.exports = router;