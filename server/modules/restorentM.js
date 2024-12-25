const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    address: { type: String, required: true },
    rating: { type: Number, default: 0 },
})

const Res = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Res;