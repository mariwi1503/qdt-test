"use strict"
const express = require('express')
    , config = require('./config')

const port = config.port
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// global route
app.get('/', (req, res) => {
    res.send('QDT PROJECT')
})

// unhandled route
app.all('*', (req, res) => {
    res.send('Sepertinya anda tersesat')
})

app.listen(port, () => console.log(`Running on port: ${port}`))