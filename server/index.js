// Configure DotENV
require('dotenv').config();

// PORT Define
const PORT = process.env.PORT || 5000;

// Define and Initiate Express
const express = require('express');
const app = express();

// Define and Use Cors
const cors = require('cors');
app.use(cors());

// Define and Use Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// MongoDB
const db = require('./Models/db');

// Routes
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const CategoryRouter = require('./Routes/CategoryRouter');

app.get('/', (req, res) => {
    res.send("Server Running Successfully");
});

app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use('/category', CategoryRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on : ${PORT}`);
});
