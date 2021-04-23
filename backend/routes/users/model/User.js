const mongoose = require('mongoose');
const moment = require('moment');
const now = moment();

var UserSchema = new mongoose.Schema({
    id: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        default: '',
    },
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
    password: { type: String, default: '' },
    userCollection: {
        type: Array,
        trim: true,
        default: []
    },

    timestamp: { type: String, default: now.format('dddd, MMMM Do YYYY, h:mm:ss a') }
});

module.exports = mongoose.model('User', UserSchema);