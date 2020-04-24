const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const Booking = require('../models/bookingsModel.js');

const profileController = {

    getProfile: function (req, res) {

        var query = {email: req.params.email};
        var query2 = {userEmail: req.params.email};

        var projection = 'uname email address';
        var projection2 = "sitterName";

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
    }
}
module.exports = profileController;



