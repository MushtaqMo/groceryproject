const express = require('express')
const router = express.Router()
const itemsController = require('../controllers/items')

router.get('items', itemsController.getProducts)
router.get('/items/:id', itemsController.getProduct)
router.post('/items', itemsController.createProduct)
router.patch('/items/:id', itemsController.editProduct)
router.delete('/items/:id', itemsController.deleteProduct)

module.exports = router
