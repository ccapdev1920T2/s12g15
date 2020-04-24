
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    uname: {
        type: String,
        required: true
    },
    email: {   
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    
    pword: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);
