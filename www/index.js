const dbConnection = require('../config/db.config');

// connect the database
dbConnection();

const express = require('express');
const app = express();
app.use(express.json());


module.exports = app;