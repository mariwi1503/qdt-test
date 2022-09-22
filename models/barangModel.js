const db = require('../db/connection')

module.exports = {
    getAllBarang: async (orderBy, arrBy) => {
        try {
            let query = `SELECT * FROM barang ORDER BY ${orderBy} ${arrBy}`
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
    },
    updateBarang: async (data, id) => {
        try {
            let query = `UPDATE barang set ? WHERE id = ?`
            const [rows, fields] = await db.query(query, [data, id])
        } catch (error) {
            throw new Error(error)
        }
    },
    deleteBarang: async (id) => {
        try {
            let query = `DELETE FROM barang WHERE id = ?`
            const [rows, fields] = await db.query(query, id)
            return rows
        } catch (error) {
            throw new Error(error)
        }
    },
    getBarangByKeyword: async (search, orderBy, arrBy) => {
        try {
            let query = 'SELECT * FROM barang WHERE name LIKE ' + db.escape('%' + search + '%') +'ORDER BY'+ db.escape(orderBy) + db.escape(arrBy)
            const [rows, fields] = await db.query(query)
            return rows
        } catch (error) {
            throw new Error(error)
        }
    }
}