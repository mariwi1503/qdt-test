const router = require('express').Router()
    , salesController = require('../controllers/salesController')

router.get('/sales/data', salesController.salesData)

module.exports = router