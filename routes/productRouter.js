const router = require('express').Router();

const productController = require('../controllers/productController');

//test
router.route('/products').get(productController.getAllProducts);

module.exports = router;