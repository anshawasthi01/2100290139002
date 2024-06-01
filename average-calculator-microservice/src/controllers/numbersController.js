const numbersService = require('../services/numbersService');

const getNumbers = async (req, res) => {
    const numberId = req.params.numberId;
    try {
        const response = await numbersService.fetchAndProcessNumbers(numberId);
        res.json(response);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).send({ error: 'Failed to fetch numbers' });
    }
};

module.exports = {
    getNumbers
};
