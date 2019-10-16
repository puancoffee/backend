const express = require('express');
const router = express.Router();
const multer = require('multer')

const productController = require('../controllers/product')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


/* Show Product . */
router.get('/product', productController.showProduct)
/* Show Product By Id . */
router.get('/product/:productId', productController.showProductById)
/* Add Product . */
router.post('/product', upload.single('images'), productController.create)

module.exports = router;