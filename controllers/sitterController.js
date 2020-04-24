
const db = require('../models/db.js');

const Sitter = require('../models/SitterModel.js');

const sitterController = {

    getSitter: function (req, res) {


        var projection = 'fname prefer address rating available';

        db.findMany(Sitter, function(err, result) {

            if(result != null) {
                res.render('topsitters', {details: result});
            }
            else {
                res.render('error');
            }
        });
    },


    getSitterLogin: function (req, res) {

        var projection = 'fname prefer address rating available';

        db.findMany(Sitter, function(err, result) {

            if(result != null) {
                res.render('topsitterslogin', {details: result, email: req.params.email});
            }
            else {
                res.render('error');
            }
        });
    }
}


module.exports = sitterController;
