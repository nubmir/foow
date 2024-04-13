const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const Routes = require('./src/routes/routes');
const path = require('path');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api', (req, res) => {
    res.send('Welcome to the Foodo API');
});
app.use('/api', Routes);

// Serving static files
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
