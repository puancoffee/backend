const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user')

/* Login Users . */
router.post('/login', UserController.login)

/* Register Users . */
router.post('/register', UserController.register)

module.exports = router;