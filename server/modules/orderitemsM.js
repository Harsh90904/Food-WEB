const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cart:{type: mongoose.Schema.Types.ObjectId, ref: 'Cart', required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    menu: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
    qty:{type:Number}
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;