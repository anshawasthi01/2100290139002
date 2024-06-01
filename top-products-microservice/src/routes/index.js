
const express = require('express');
const productsRouter = require('./products');

const router = express.Router();

// Products routes
router.use('/:categoryName/products', productsRouter);

module.exports = router;
