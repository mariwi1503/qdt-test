const router = require('express').Router()
    , orderController = require('../controllers/orderController')

router.post('/order/create', orderController.create)
router.get('/order/list', orderController.list)
router.get('/order/:id', orderController.read)
router.delete('/order/:id', orderController.delete)

module.exports = router