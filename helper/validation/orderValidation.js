const Joi = require('@hapi/joi')

module.exports = {
    createOrderSchema: Joi.object({
        barangId: Joi.number().required(),
        quantity: Joi.number().required()
    })
}