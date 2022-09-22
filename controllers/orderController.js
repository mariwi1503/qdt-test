const orderModel = require('../models/orderModel')
    , barangModel = require('../models/barangModel')
    , db = require('../db/connection')

module.exports = {
    create: async (req, res) => {
        const trans = db.getConnection()
        try {
            const { barangId, quantity } = req.body
            if(quantity == undefined || quantity === 0 || quantity == null) throw new Error('Quantity harus diisi')

            // cek eksistensi barang
            const barang = await barangModel.getBarangById(barangId)
            if(!barang) throw new Error('Barang tidak ditemukan')
            if(barang.stok === 0) throw new Error('Stok barang habis')
            if(barang.stok < quantity) throw new Error('Stok barang tidak cukup')

            // create order
            await orderModel.createOrder({ barangId, quantity})
            const new_stok = barang.stok - quantity
            await barangModel.updateBarang({stok: new_stok}, barangId)

            res.status(201).json({
                status: 'Success'
            })

        } catch (error) {
            // await trans.rollback()
            // await trans.release()
            res.status(400).json({
                status: 'Failed',
                message: error.message
            })
        }
    }
}