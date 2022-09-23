const salesModel = require('../models/salesModel')

module.exports = {
    // TODO: Cari penamaan lebih bagus
    salesData: async (req, res) => {
        try {
            const { search = null, orderBy = 'Nama_barang', arrBy = 'ASC' } = req.query
            let data = await salesModel.getSalesData(search, orderBy, arrBy)
            if(data.length === 0) throw new Error('Belum ada transaksi')
            res.status(200).json({
                status: 'Success',
                data: data
            })
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                message: error.message
            })
        }
    },
    salesTotal: async (req, res) => {
        try {
            const { startDate, endDate = new Date() } = req.query
            const total = await salesModel.getTotal(startDate, endDate)
            const result = {
                terbanyak: total[0],
                terendah: total[total.length - 1]
            }
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
    }
}