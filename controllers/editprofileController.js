
const db = require('../models/db.js');

const User = require('../models/UserModel.js');


const editprofileController = {


    getEditProfile: function (req, res) {
        
        var query = {email: req.params.email};
        var projection = 'uname email address';

        db.findOne(User, query, projection, function(result) {
            if (result) {
                res.render('editprofile', {
                    uname: result.uname,
                    email: result.email,
                    address: result.address,
                });
            }
            else {
                res.render('error');
            }
        });
    },


    editProfile: function (req, res) {
        
        var email = req.params.email;
        var query =  {email : email};

        var update = {
            uname : req.body.uname,
            address : req.body.address,
            pword : req.body.pword

        }

        db.updateOne(User, query, update);

        res.redirect('/profile/' + email);
    },

    getEditUser: function (req, res) {
        
        var query = {email: req.params.email};
        var projection = 'uname email address';

        db.findOne(User, query, projection, function(result) {
            if (result) {
                res.render('changeuser', {
                    uname: result.uname,
                    email: result.email,
                    address: result.address,
                });
            }
            else {
                res.render('error');
            }
        });
    },

    
    editUser: function (req, res) {
    
        var email = req.params.email;
        var query = {email : email};

        var update = {
            uname: req.body.uname
        };

        db.updateOne(User, query, update);
        res.redirect('/profile/' + email);
    },

    getEditPW : function (req, res) {
        
        var query = {email: req.params.email};
        var projection = 'uname email address';

        db.findOne(User, query, projection, function(result) {
            if (result) {
                res.render('changepw', {
                    uname: result.uname,
                    email: result.email,
                    address: result.address,
                });
            }
            else {
                res.render('error');
            }
        });
    },

    editPW : function (req, res) {

        var email = req.params.email;
        var query = {email : email};

        var update = {
            pword : req.body.pword
        }

        db.updateOne(User, query, update);
        res.redirect('/profile/' + email);
    },

    getEditAddress : function (req, res) {
        
        var query = {email: req.params.email};
        var projection = 'uname email address';

        db.findOne(User, query, projection, function(result) {
            if (result) {
                res.render('changeaddress', {
                    uname: result.uname,
                    email: result.email,
                    address: result.address,
                });
            }
            else {
                res.render('error');
            }
        });
    },

    editAddress : function (req, res) {

        var email = req.params.email;
        var query = {email: email};

        var update = {
            address: req.body.address
        }

        db.updateOne(User, query, update);
        res.redirect('/profile/' + email);
    }


}
module.exports = editprofileController;
