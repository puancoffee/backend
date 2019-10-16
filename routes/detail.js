const express = require('express');
const router = express.Router();

const detailController = require('../controllers/detail')

/* Add Details Product . */
router.post('/detail', detailController.create)

/* Show Details Product . */
router.get('/detail', detailController.showDetails)
module.exports = router;

/* Show Details Product . */
router.get('/detail/:detailId', detailController.showDetailsById)
module.exports = router;