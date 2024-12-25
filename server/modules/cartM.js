const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    total_price:{ type:NUmber , required:true},
    status: { type: String, enum: ['Pending','Preparing','Delivered'], default:"Pending"},
    created_at:{type:Date.now()}
})

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;