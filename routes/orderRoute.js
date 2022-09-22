const router = require('express').Router()
    , orderController = require('../controllers/orderController')

router.post('/order/create', orderController.create)
router.get('/order/list', orderController.list)

module.exports = router