// Calculate the average of an array of numbers
const calculateAverage = (numbers) => {
    if (!numbers.length) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return (sum / numbers.length).toFixed(2);
};

module.exports = calculateAverage;
