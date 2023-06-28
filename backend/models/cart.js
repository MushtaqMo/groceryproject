const mongoose = require('mongoose')

// get schema from mongoose object
const Schema = mongoose.Schema
// what the data will look like
const cartSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    numberSelected: {type: Number, required: true}
})

module.exports = mongoose.model('Cart', cartSchema)