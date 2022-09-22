const router = require('express').Router()
    , barangController = require('../controllers/barangController')

router.get('/barang/list', barangController.list)

module.exports = router