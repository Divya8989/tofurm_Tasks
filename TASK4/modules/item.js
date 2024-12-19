const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    name:String,
    company:String,
    price:String,
});

module.exports = mongoose.model('Item', itemSchema);
