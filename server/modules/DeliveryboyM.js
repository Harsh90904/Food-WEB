const mongoose = require('mongoose');

const DeliveryboySchema = new mongoose.Schema({
    name: { type: String, required: true },
    Number: { type: Number, required: true},
    vehicle: { type: String, enum: ['Bike','Bicycle','EV_Bike']},  
})

const Del = mongoose.model('Del', DeliveryboySchema);

module.exports = Del;