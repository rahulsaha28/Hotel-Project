const Joi = require('joi');

const HotelTypeSchema = Joi.object({
    code:Joi.number().required(),
    name:Joi.string().required()
})

module.exports = HotelTypeSchema;