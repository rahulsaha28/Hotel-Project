const mongoose = require('mongoose');
const { Schema } = mongoose;

// this is the Catagory Schema
const catagorySchema = new Schema({
    code:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    update_at:{
        type:Date,
        default:Date.now()
    }
});

module.exports.Catagory = mongoose.model('Catagory', catagorySchema);