module.exports = {
    port: process.env.PORT || 5000,
    dbConfig: {
        port: 7455,
        host: 'containers-us-west-41.railway.app', // process.env.DB_HOST
        user: 'root', // process.env.DB_USER
        password: 'RmLU4dCLrCqpFOynocdU', // process.env.DB_PASSWORD
        database: 'railway', // process.env.DB_NAME
    },
}