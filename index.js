const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
const port = process.env.PORT || 5000;


// Environment Variables
dotenv.config();


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.get('/api', (req, res) => {
    res.send('Welcome to the API Foodo');
});


// Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

