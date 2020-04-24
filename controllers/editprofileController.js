
const db = require('../models/db.js');

const User = require('../models/UserModel.js');


const editprofileController = {


    getEditProfile: function (req, res) {
        
        var email = req.params.email;
        var query = {email : email};

        res.render('editprofile', query);
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
    }

}

module.exports = editprofileController;
