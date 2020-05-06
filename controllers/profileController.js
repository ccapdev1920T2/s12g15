const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const Booking = require('../models/bookingsModel.js');

const Sitter = require('../models/SitterModel.js');

const profileController = {

    getProfile: function (req, res) {

        var query = {email: req.params.email};
        var query2 = {email: req.params.email};

        var projection = 'uname email address';
        var projection2 = "email sitterName";

        db.findOne(User, query, projection, function(result) { 

            if(result) {
                db.findMany(Booking, query2, projection2, function(results){              
                    res.render('profile', 
                    {
                        uname: result.uname,
                        email: result.email,
                        address: result.address, 
                        results: results
                    });

                });
            }
            else {
                res.render('error');
            }
        });
    },

    endBooking : function (req, res) {

        var query = {sitterName: req.params.sitterName};
        var query2 = {email: req.params.email, sitterName: req.params.sitterName};
        var projection = 'email sitterName';
        var email = req.params.email;
        var sitterName = req.params.sitterName;

        db.findOne(Booking, query, projection, function(result) {

             if(result) {
                db.deleteOne(Booking, {
                    email: result.email,
                    sitterName: sitterName
                }); 

                res.render('successCancel', query2);
            }
             else{
                res.render('error');
            }
        });
    }
}
module.exports = profileController;



