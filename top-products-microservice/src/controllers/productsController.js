const productsService = require('../services/productsService');

// Controller to handle fetching top products in a category
const getTopProducts = async (req, res) => {
    const { categoryName } = req.params;
    const { n = 10, page = 1, sortBy, sortOrder } = req.query;

    try {
        const products = await productsService.fetchTopProducts(categoryName, n, page, sortBy, sortOrder);
        res.json(products);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).send({ error: 'Failed to fetch products' });
    }
};

// Controller to handle fetching product details by ID
const getProductById = async (req, res) => {
    const { productId } = req.params;

    try {
        const product = await productsService.fetchProductById(productId);
        if (product) {
            res.json(product);
        } else {
            res.status(404).send({ error: 'Product not found' });
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).send({ error: 'Failed to fetch product details' });
    }
};

module.exports = {
    getTopProducts,
    getProductById
};
