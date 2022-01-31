const mongoose = require('mongoose');
const { Schema } = mongoose;

// this is the HotelTheme Schema
const hotelThemeScheme = new Schema({
    code:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})


module.exports.HotelTheme = mongoose.model('HotelTheme', hotelThemeScheme);