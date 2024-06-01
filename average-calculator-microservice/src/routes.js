const express = require('express');
const router = express.Router();
const numbersController = require('./controllers/numbersController');

// Define the route for number IDs
router.get('/:numberId', numbersController.getNumbers);

module.exports = router;
