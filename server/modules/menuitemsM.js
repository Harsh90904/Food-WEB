const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true},
    price: { type: Number, required: true},
    rate: { type: Number , min:1, max:5, required: true},
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    status: { type: String, enum: ['Pending','Preparing','Delivered'], default:"Pending"},
    created_at:{type:Date.now()}
})

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;