
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 9876;

// Middleware
app.use(express.json());

// Routes
app.use('/categories', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
