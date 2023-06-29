const express = require('express');
const mongoose = require('mongoose');
const app = express();
const itemsController = require('./controllers/items');

mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true})

const cartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    
      price: {
        type: Number,
        required: true
      },
    
      category: {
        type: String,
        required: true
      },
    
      numberSelected: {
        type: Number,
        required: true
      }
    });

    const Cart = mongoose.model('Cart', cartSchema)

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.get('/', function(req,res)
    {
        res.sendFile(__dirname + '/frontend/index.html');
    })

    
    app.get('/items', itemsController.getProducts);


    app.post('/cart', itemsController.createProduct);

    app.listen(4000, function() {
      console.log("Server running on 4000")
  })