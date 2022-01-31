const mongoose = require('mongoose');
const { Schema } = mongoose;

// this is the HotelType Schema
const hotelTypeSchema = new Schema({
    code:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    update_date:{
        type:Date,
        default:Date.now()
    }
});

module.exports.HotelType = mongoose.model('HotelType', hotelTypeSchema);
