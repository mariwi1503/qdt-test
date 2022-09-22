const barangModel = require('../models/barangModel')

module.exports = {
    list: async (req, res) => {
        try {
            const result = await barangModel.getAllBarang()
            if(result.length == 0) throw new Error('Belum ada barang')
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
    create: async (req, res) => {
        try {
            const { name, jenis, stok } = req.body
            if(name == undefined || jenis == undefined || stok == undefined) throw new Error('Data harus dilengkapi')
            
            const barang = {
                name, jenis, stok
            }
            await barangModel.createBarang(barang)
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
    read: async (req, res) => {
        try {
            const { id } = req.params
            const barang = await barangModel.getBarangById(id)
            if(!barang) throw new Error('Data tidak ditemukan')

            res.status(200).json({
                status: 'Success',
                data: barang
            })
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                message: error.message
            })
        }
    }
}