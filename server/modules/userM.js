const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Customer', 'Restaurant Owner', 'Delivery Personnel','Admin','SuperAdmin'], default:"Customer", required: true },
    preferences: { type: String },
    address: { type: String },
    phone_number: { type: String },
})

const User = mongoose.model('User', UserSchema);

module.exports = User;