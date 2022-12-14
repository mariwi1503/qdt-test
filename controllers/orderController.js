const orderModel = require('../models/orderModel')
    , barangModel = require('../models/barangModel')
    , db = require('../db/connection')
    , { createOrderSchema } = require('../helper/validation/orderValidation')

module.exports = {
    create: async (req, res) => {
        const trans = db.getConnection()
        try {
            const payload = await createOrderSchema.validateAsync(req.body)
            const { barangId, quantity } = payload

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
            res.status(400).json({
                status: 'Failed',
                message: error.message
            })
        }
    },
    list: async (req, res) => {
        try {
            const result = await orderModel.getAllOrder()
            if(result.length == 0) throw new Error('Belum ada orderan')
            res.status(200).json({
                status: 'Success',
                data: result
            })
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                message: error.message
            })
        }
    },
    read: async (req, res) => {
        try {
            const { id } = req.params
            const idValid = /^\d+$/.test(id)
            if(!idValid) throw new Error('Id harus berupa angka')
            const order = await orderModel.getOrderById(id)
            if(!order) throw new Error('Orderan tidak ditemukan')

            res.status(200).json({
                status: 'Success',
                data: order
            })
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                message: error.message
            })
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const idValid = /^\d+$/.test(id)
            if(!idValid) throw new Error('Id harus berupa angka')
            // cek eksistensi order
            const order = await orderModel.deleteOrder(id)
            if(!order) throw new Error('Orderan tidak ditemukan')

            // delete order
            await orderModel.deleteOrder(id)
            res.status(200).json({
                status: 'Success'
            })

        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                message: error.message
            })
        }
    }
}