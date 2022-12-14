const barangModel = require('../models/barangModel')
    , {createBarangSchema, updateBarangSchema} = require('../helper/validation/barangValidation')

module.exports = {
    list: async (req, res) => {
        try {
            const { search, orderBy = 'name', arrBy = 'ASC' } = req.query
            let result;
            if(!search) {
                result = await barangModel.getAllBarang(orderBy, arrBy)
            } else {
                result = await barangModel.getBarangByKeyword(search, orderBy, arrBy)
            }
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
            const payload = await createBarangSchema.validateAsync(req.body)

            const { name, jenis, stok } = payload    
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
            const idValid = /^\d+$/.test(id)
            if(!idValid) throw new Error('Id harus berupa angka')
            const barang = await barangModel.getBarangById(id)
            if(!barang) throw new Error('Barang tidak ditemukan')

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
    },
    update: async (req, res) => {
        try {
            const { id } = req.params
            const idValid = /^\d+$/.test(id)
            if(!idValid) throw new Error('Id harus berupa angka')

            const payload = await updateBarangSchema.validateAsync(req.body)
            const { name, jenis, stok } = payload

            // cek eksistensi barang
            const barang = await barangModel.getBarangById(id)
            if(!barang) throw new Error('Barang tidak ditemukan')

            let data = {}
            if(name) data.name = name
            if(jenis) data.jenis = jenis
            if(stok) data.stok = stok

            if(!data) throw new Error('Data harus diisi')
            await barangModel.updateBarang(data, id)
            res.status(200).json({
                status: 'Success'
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
            // cek eksistensi barang
            const barang = await barangModel.getBarangById(id)
            if(!barang) throw new Error('Barang tidak ditemukan')

            // delete barang
            await barangModel.deleteBarang(id)
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