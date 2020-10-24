const mongoose = require('mongoose');

const CitySchema = mongoose.Schema({    
    _id: Number,
    city: String,
    start_date: Date,
    end_date: Date,
    price: Number,
    status: String,
    color: String
}, {
    timestamps: true
});

module.exports = mongoose.model('City', CitySchema, 'city_info');