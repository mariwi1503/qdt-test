"use strict"
const express = require('express')
    , config = require('./config')
    , barangRoute = require('./routes/barangRoute')
    , orderRoute = require('./routes/orderRoute')
    , salesRoute = require('./routes/salesRoute')

const port = config.port
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api', barangRoute, orderRoute, salesRoute)

// global route
app.get('/', (req, res) => {
    res.send('<h1>Selamat datang semuanya</h1> Daftar endpoint: https://documenter.getpostman.com/view/15653378/2s7ZLdNZFa')
})

// unhandled route
app.all('*', (req, res) => {
    res.send('Sepertinya anda tersesat')
})

app.listen(port, () => console.log(`Running on port: ${port}`))