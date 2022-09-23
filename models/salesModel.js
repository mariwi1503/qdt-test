const db = require('../db/connection')

module.exports = {
    getSalesData: async (search, orderBy, arrBy) => {
        try {
            let query =`SELECT
                b.name as Nama_barang,
                b.jenis as Jenis_Barang,
                b.stok,
                o.quantity as Jumlah_terjual,
                o.created_at as Tanggal_transaksi
                FROM barang as b INNER JOIN orderan as o ON b.id = o.barangId `  
            if(search) query += `WHERE b.name LIKE `+ db.escape('%' + search + '%')
            query += ` ORDER BY ${orderBy} ${arrBy}`
            
            const [rows, fields] = await db.query(query)
            return rows
        } catch (error) {
            throw new Error(error)
        }
    },
    // TODO: name it better
    getTotal: async (dataNeed) => {
        try {
            let query = `SELECT SUM(o.quantity) as Total_terjual, b.name
                        FROM orderan as o JOIN barang as b ON b.id = o.barangId
                        GROUP BY b.name ORDER BY Total_terjual DESC`
            const [rows, fields] = await db.query(query)
            return rows
        } catch (error) {
            throw new Error(error)
        }
    }
}