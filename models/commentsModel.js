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
    comment: {
        type: String,
        required: true
    },
    rate: {
        type:Number,
        required: true
    }
});

module.exports = mongoose.model('comments', UserSchema);