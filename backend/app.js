const express = require('express');
const app = express();

const cors = require('cors');

const errorMiddleware = require('./middlewares/errors')

// Import routes
const Transaction = require('./routes/Transaction');

app.options('*', cors());
app.use(express.json())
app.use('/', Transaction)

// Middleware to handle errors
app.use(errorMiddleware);


// const cors = require('cors');
// app.options("*", cors({ origin: '*', optionsSuccessStatus: 200 }));
// app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));

module.exports = app