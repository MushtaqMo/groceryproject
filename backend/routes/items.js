const express = require('express')
const router = express.Router()
const itemsController = require('../controllers/items')

router.get('items', itemsController.getProducts)
router.get('/items/:id', itemsController.createProduct)
router.post('/items', itemsController.getProduct)
router.patch('/items/:id', itemsController.editProduct)
router.delete('/items/:id', itemsController.deleteProduct)

module.exports = router