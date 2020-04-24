
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    sitterName: {
        type: String,
        required: true
    },
    Done: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('bookings', UserSchema);