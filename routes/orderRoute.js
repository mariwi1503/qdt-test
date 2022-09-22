const router = require('express').Router()
    , orderController = require('../controllers/orderController')

router.post('/order/create', orderController.create)

module.exports = router