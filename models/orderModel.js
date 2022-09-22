const db = require('../db/connection')

module.exports = {
    createOrder: async (data) => {
        try {
            let query = `INSERT INTO orderan set ?`
            const [rows, fields] = await db.query(query, data)
            return rows
        } catch (error) {
            throw new Error(error)
        }
    },
    getAllOrder: async () => {
        try {
            let query = `SELECT * FROM orderan`
            const [rows, fields] = await db.query(query)
            return rows
        } catch (error) {
            throw new Error(error)
        }
    },
    getOrderById: async (id) => {
        try {
            let query = `SELECT * FROM orderan WHERE id = ?`
            const [[rows], fields] = await db.query(query, id)
            return rows
        } catch (error) {
            throw new Error(error)
        }
    },
}