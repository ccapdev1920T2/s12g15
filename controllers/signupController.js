const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const {validationResult} = require('express-validator');

const signupController = {

    getSignUp: function (req, res) {
        res.render('register');
    },

    checkEmail: function (req,res) {

        var email = req.query.email;

        db.findOne(User, {email: email}, 'email', function (result){
            res.send(result);
        });

    },

    checkUname: function (req,res) {

        var uname = req.query.uname;

        db.findOne(User, {uname: uname}, 'uname', function (result){
            res.send(result);
        });

    },

    postSignUp: function (req, res) {

        var uname = req.body.uname;
        var email = req.body.email;
        var address = req.body.address;
        var pword = req.body.pword;
        var cpword = req.body.cpword;
        var query = {email: email};
        var query2 = {uname: uname};

        if(pword != cpword){

        res.render('register');
        
        } else {
            db.findOne(User, query, null, function(result) {

                if (!result) {
                    
                    db.findOne(User, query2, null, function(results) {
        
                    if(!results) {
        
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
        
                } else {
        
                    res.redirect("registerFail");
        
                }
        
                });
        }
    },

    getRegisterFail: function (req, res) {
	
        res.render("registerFail");

    }

}
module.exports = signupController;
