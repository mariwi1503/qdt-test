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
    createBarang: async (data) => {
        try {
            let query = `INSERT INTO barang set ?`
            const [rows, fields] = await db.query(query, data)
            return rows
        } catch (error) {
            throw new Error(error)
        }
    },
    getBarangById: async (id) => {
        try {
            let query = `SELECT * FROM barang WHERE id = ?`
            const [[rows], fields] = await db.query(query, id)
            return rows
        } catch (error) {
            throw new Error(error)
        }
    }
}