const router = require('express').Router()
    , barangController = require('../controllers/barangController')

router.get('/barang/list', barangController.list)
router.post('/barang/create', barangController.create)
router.get('/barang/:id', barangController.read)
router.put('/barang/:id', barangController.update)
router.delete('/barang/:id', barangController.delete)

module.exports = router