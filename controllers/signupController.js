const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const signupController = {

    getSignUp: function (req, res) {
        res.render('register');
    },

 
    postSignUp: function (req, res) {

        var uname = req.body.uname;
        var email = req.body.email;
        var address = req.body.address;
        var pword = req.body.pword;
        var query = {email: email};

        db.findOne(User, query, null, function(result) {

        if (!result) {

            db.insertOne(User, {
                uname: uname,
                email: email,
                address : address,
                pword: pword
            });
    
            res.redirect('/profile/' + email );
        } else {
            res.redirect("registerFail");
        }

        });
    },

    getRegisterFail: function (req, res) {
	
        res.render("registerFail");
    }

}
module.exports = signupController;
