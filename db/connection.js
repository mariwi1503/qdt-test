const { dbConfig } = require('../config')
    , mysql = require('mysql2')

const pool = mysql.createPool({
    port: dbConfig.port,
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    connectionLimit: 3
}).promise()

module.exports = pool