const axios = require('axios');
const generateUniqueId = require('../utils/generateUniqueId');

const testServerURL = 'http://20.244.56.144/test/companies';

// Helper function to fetch products from a company
const fetchCompanyProducts = async (company, category, n, minPrice, maxPrice) => {
    const url = `${testServerURL}/${company}/categories/${category}/products?top=${n}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    try {
        const response = await axios.get(url, { timeout: 500 });
        return response.data || [];
    } catch (error) {
        console.error(`Error fetching products from ${company}: ${error.message}`);
        return [];
    }
};

// Fetch top products from all companies and sort them as needed
const fetchTopProducts = async (category, n, page, sortBy, sortOrder) => {
    const companies = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];
    let products = [];

    for (const company of companies) {
        const companyProducts = await fetchCompanyProducts(company, category, n);
        products = products.concat(companyProducts.map(product => ({
            ...product,
            id: generateUniqueId(product)
        })));
    }

    // Apply sorting if specified
    if (sortBy) {
        products.sort((a, b) => {
            if (sortOrder === 'desc') {
                return b[sortBy] - a[sortBy];
            }
            return a[sortBy] - b[sortBy];
        });
    }

    // Apply pagination
    const startIndex = (page - 1) * n;
    const paginatedProducts = products.slice(startIndex, startIndex + n);

    return paginatedProducts;
};

// Fetch product details by ID
const fetchProductById = async (productId) => {
    // Since product data is fetched from external sources, you need a way to keep track of fetched products.
    // This example assumes that you store fetched products in memory.
    // In a real application, you might want to cache this data in a database or a cache store.
    return fetchedProducts.find(product => product.id === productId) || null;
};

module.exports = {
    fetchTopProducts,
    fetchProductById
};
