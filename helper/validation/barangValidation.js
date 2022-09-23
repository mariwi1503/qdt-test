const Joi = require('@hapi/joi')

module.exports = {
    createBarangSchema: Joi.object({
        name: Joi.string().required(),
        jenis: Joi.string().required(),
        stok: Joi.number().required()
    }),
    updateBarangSchema: Joi.object({
        name: Joi.string(),
        jenis: Joi.string(),
        stok: Joi.number()
    })
}