
const db = require('../models/db.js');


const User = require('../models/UserModel.js');

const logInController = {


    getLogin: function (req, res) {
        res.render('login');
    },


    checkLogin: function (req, res) {

        var projection = 'uname email address pword';


        var email = req.body.email;
        var pword = req.body.pword;


    User.findOne({email: email}, projection, function(err, result) {

        var uname = result.uname;
        var address = result.address;
        var cpword = result.pword; 
       
        if(pword != cpword) {
            res.render('loginfail');
        } else {
            var details =  {
                uname: uname,
                email: email,
                address: address 
            }

            if(err) {
                console.log(err);
                return res.status(500).send();
            }
            
            if(!User) {
                res.render('error');
            }
            
            res.redirect('/profile/' + email );
        }

        });
    }   
}

module.exports = logInController;
