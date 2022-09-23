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

}