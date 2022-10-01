"use strict"
const express = require('express')
    , config = require('./config')
    , wellcome = require('./endPoint')
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
    res.send(wellcome)
})

// unhandled route
app.all('*', (req, res) => {
    res.send('Sepertinya anda tersesat')
})

app.listen(port, () => console.log(`Running on port: ${port}`))