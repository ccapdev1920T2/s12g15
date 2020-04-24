
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },

    prefer: {
        type: String,
        rewuired: false
    },

    address: {
        type: String,
        required: true
    },
    
    rating: {
        onestar: {
            type: Number,
            default: 0
        },
        twostar: {
            type: Number,
            default: 0
        },
        threestar: {
            type: Number,
            default: 0
        },
        fourstar: {
            type: Number,
            default: 0
        },
        fivestar: {
            type: Number,
            default: 0
        },
        ratecount: {
            type: Number,
            default: 0
        },
        rateavg: {
            type: Number,
            default: 0
        },
    },

    available: {
        type: String,
        required: false
    },
    
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Sitter', UserSchema);