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
    }
}