const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

// GET top products in a category with optional sorting and pagination
router.get('/', productsController.getTopProducts);

// GET specific product details by ID
router.get('/:productId', productsController.getProductById);

module.exports = router;
