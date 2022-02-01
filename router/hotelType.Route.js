const route = require('express').Router();
const { createHotelType, getHotelType, getHotelTypeById, updateHotelType, deleteHotelType }  = require('../controller/hotelType.Controller');

// create the hotel type
route.post('/', createHotelType);
route.get('/', getHotelType);
route.get('/:id', getHotelTypeById);
route.put('/:id', updateHotelType);
route.delete('/:id', deleteHotelType);


module.exports = route;