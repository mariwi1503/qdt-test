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
    }
}