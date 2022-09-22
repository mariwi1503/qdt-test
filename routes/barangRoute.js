const router = require('express').Router()
    , barangController = require('../controllers/barangController')

router.get('/barang/list', barangController.list)
router.post('/barang/create', barangController.create)

module.exports = router