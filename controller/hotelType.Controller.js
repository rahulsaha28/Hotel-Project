const HotelTypeSchema = require("../util/HotelType.Validation");

module.exports.createHotelType = async(req, res)=>{
    try{
        const data = await HotelTypeSchema.validateAsync(req.body);
        
        res.status(201).json({...data});

    }
    catch(err){

        res.status(204).json({'err':err.details[0].message})
    }
}

module.exports.getHotelType = async(req, res)=>{
    try{

        res.status(200).json({ 'data':[] });
    }
    catch(err){
        res.status(204).json({'err':'No data found.'});
    }
}

module.exports.getHotelTypeById = async(req, res)=>{
        try{
            res.status(200).json({'data':{'id':2, "code":200, "name":"r"}})
        }
        catch(err){
            res.status(204).json({})
        }
       
    
}

module.exports.updateHotelType = async(req, res)=>{
    try{
        res.status(200).json({"data":{ ...req.body }});
    }
    catch(err){
        res.status(204).json({"err":"update failed."})
    }
}


module.exports.deleteHotelType = async(req, res)=>{
    try{
        res.status(200).json({'mes':"Successfully deleted."})
    }
    catch(err){
        res.status(204).json({"err":"Hotel Type can not deleted."})
    }
}