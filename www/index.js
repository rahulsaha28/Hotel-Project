const dbConnection = require('../config/db.config');

// connect the database
dbConnection();

const express = require('express');
const app = express();
app.use(express.json());

const { HotelTypeRoute } = require('../router/index');

// use that route
app.use('/hotelTypes', HotelTypeRoute);


module.exports = app;