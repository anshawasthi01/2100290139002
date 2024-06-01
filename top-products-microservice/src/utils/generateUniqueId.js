const { v4: uuidv4 } = require('uuid');

// Utility to generate a unique ID for a product
const generateUniqueId = (product) => {
    // Customize the ID generation logic as needed. Here we use a combination of UUID and product name.
    return `${uuidv4()}-${product.productName}`;
};

module.exports = generateUniqueId;
