const mongoose = require('mongoose');
const appConfig = require('./app.config');

const dbConnection = async()=>{
    await mongoose.connect(appConfig.db.url);
}

module.exports = dbConnection;