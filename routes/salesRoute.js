const router = require('express').Router()
    , salesController = require('../controllers/salesController')

router.get('/sales/data', salesController.salesData)
router.get('/sales/total', salesController.salesTotal)

module.exports = router