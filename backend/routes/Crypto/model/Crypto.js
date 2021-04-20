const mongoose = require('mongoose');
const moment = require('moment');
const now = moment();


const CryptoSchema = new mongoose.Schema({
    crypto: {
        type: Array,
        trim: true,
        default: []
    }
})
module.exports = mongoose.model('Crypto', CryptoSchema)