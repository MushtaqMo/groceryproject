const express = require('express');
const mongoose = require('mongoose');
const itemsController = require('./controllers/items');
const itemRoutes = require('./routes/items')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())
app.use('.models/cart.js', itemRoutes)


mongoose.connect(process.env.MONGODB_URL)
// LISTEN ON PORT 4000
// frontend is running on port 3000
.then(() => {

 

    app.listen(4000, function() {
        console.log("Server running on 4000")
    })