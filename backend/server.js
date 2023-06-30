
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/items')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())
app.use('/grocery', itemRoutes)


mongoose.connect(process.env.MONGODB_URL)
.then(() => {

    app.listen(4000, function() {
        console.log("Server running on 4000")
    })
  })
  .catch((error) => {
    console.log(error)
  } )