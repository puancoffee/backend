const express = require('express');
const router = express.Router();

const detailController = require('../controllers/detail')

/* Login Users . */
router.post('/', detailController.create)

module.exports = router;