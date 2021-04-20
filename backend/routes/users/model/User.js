const mongoose = require('mongoose');
const moment = require('moment');
const now = moment();

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        default: ''
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        require: true,
        default: ''
    },
    cryptoRanks: {
        type: Array,
        trim: true,
        default: []
    },

    calories: {
        type: Number,
        trim: true,
        default: 0

    },

    food: {
        type: Array,
        trim: true,
        default: []
    },
    password: { type: String, default: '' },
    timestamp: { type: String, default: now.format('dddd, MMMM Do YYYY, h:mm:ss a') }
});

module.exports = mongoose.model('User', UserSchema);