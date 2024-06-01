const axios = require('axios');
const calculateAverage = require('../utils/calculateAverage');

const testServerURLs = {
    p: 'http://20.244.56.144/test/primes',
    f: 'http://20.244.56.144/test/fibo',
    e: 'http://20.244.56.144/test/even',
    r: 'http://20.244.56.144/test/rand'
};

let window = [];
const WINDOW_SIZE = 10;

// Fetch numbers from the test server
const fetchNumbers = async (url) => {
    try {
        const response = await axios.get(url, { timeout: 500 });
        return response.data.numbers || [];
    } catch (error) {
        console.error(`Error fetching numbers: ${error.message}`);
        return [];
    }
};

// Update the sliding window with unique numbers
const updateWindow = (newNumbers) => {
    const uniqueNumbers = Array.from(new Set([...window, ...newNumbers]));
    window = uniqueNumbers.slice(-WINDOW_SIZE);
};

// Fetch and process numbers based on the number ID
const fetchAndProcessNumbers = async (numberId) => {
    const url = testServerURLs[numberId];
    if (!url) {
        throw new Error('Invalid number ID');
    }

    const newNumbers = await fetchNumbers(url);
    const previousWindowState = [...window];
    updateWindow(newNumbers);
    const currentWindowState = [...window];
    const average = calculateAverage(currentWindowState);

    return {
        numbers: newNumbers,
        windowPrevState: previousWindowState,
        windowCurrState: currentWindowState,
        avg: average
    };
};

module.exports = {
    fetchAndProcessNumbers
};
