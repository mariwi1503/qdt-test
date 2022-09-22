const db = require('../db/connection')

module.exports = {
    getAllBarang: async () => {
        try {
            let query = `SELECT * FROM barang`
            const [rows, fields] = await db.query(query)
            return rows
        } catch (error) {
            throw new Error(error)
        }
    },
}