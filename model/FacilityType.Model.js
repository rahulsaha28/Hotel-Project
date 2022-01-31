const mongoose = require('mongoose');
const { Schema }  = mongoose;

// this is the facilityType Schema
const facilityTypeSchema = new Schema({
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
})


module.exports.FacilityType = mongoose.model('FacilityType', facilityTypeSchema);