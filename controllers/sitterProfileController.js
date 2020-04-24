const db = require('../models/db.js');

const Sitter = require('../models/SitterModel.js');

const User = require('../models/UserModel.js');

const Booking = require('../models/bookingsModel.js');

const Comments = require('../models/commentsModel.js');

const sitterProfileController = {

    getSitterProfile: function (req, res) {


        var email = req.params.email;
        var query = {fname: req.params.fname};
        var query2 = {sitterName: req.params.fname};

        var projection = 'fname prefer address rating available';
        var projection2 = "userEmail comment rate";

        db.findOne(Sitter, query, projection, function(result) {

            if(result) {
                db.findMany(Comments, query2, projection2, function(results){   

                    res.render('sitterProfile', 
                    {
                        email: email,
                        fname: result.fname,
                        prefer: result.prefer,
                        address: result.address,
                        rating: result.rating,
                        available: result.available,
                        image: result.image,
                        results: results

                    });
                });
            }
             else{

                res.render('error');
            }
        });
    },

    getConfirmBooking: function (req, res) {

        var email = req.params.email;
        var fname = req.params.fname;
        var query = {email: email, fname: fname}

        res.render('confirmBooking', query);
    },
    
    confirmBooking: function(req,res) {

        var email = req.params.email;
        var fname = req.params.fname;
        var query = {email: email, fname: fname}

        db.insertOne(Booking, {
            userEmail: email,
            sitterName: fname,
            Done: false
        });

        res.render('successConfirm', query);

    },

    getCommentRatingForm: function (req, res) {

        var email = req.params.email;
        var fname = req.params.fname;
        var query = {email: email, fname: fname}

        res.render('comment-rating', query);
    },

    postCommentRatingFrom: function (req, res) {

        var email = req.params.email;
        var fname = req.params.fname;
        var comment = req.body.comment;
        var rate = req.body.rating;
        var projection = "rating";

        var url = "/sitterProfile/" + email + "/" + fname;

        db.findOne(Sitter, {fname: fname}, projection ,function(result){

        var fivestar = result.rating.fivestar;
        var fourstar = result.rating.fourstar;
        var threestar = result.rating.threestar;
        var twostar = result.rating.twostar;
        var onestar = result.rating.onestar;
        var ratecount = result.rating.ratecount;
        var rateavg = result.rating.rateavg;

        
        if(rate == 5) {
            fivestar++;
            ratecount++; 
            db.updateOne(Sitter, {fname: fname}, {"rating.fivestar": fivestar});
            db.updateOne(Sitter, {fname: fname}, {"rating.ratecount": ratecount});
        } else if(rate == 4) {
                fourstar++;
                ratecount++; 
                db.updateOne(Sitter, {fname: fname}, {"rating.fourstar": fourstar});
                db.updateOne(Sitter, {fname: fname}, {"rating.ratecount": ratecount});
            } else if(rate == 3) {
                    threestar++;
                    ratecount++; 
                    db.updateOne(Sitter, {fname: fname}, {"rating.threestar": threestar});
                    db.updateOne(Sitter, {fname: fname}, {"rating.ratecount": ratecount});
                } else if(rate == 2) {
                        twostar++;
                        ratecount++; 
                        db.updateOne(Sitter,{fname: fname}, {"rating.twostar": twostar});
                        db.updateOne(Sitter, {fname: fname}, {"rating.ratecount": ratecount});
                    } else if(rate == 1) {
                            onestar++;
                            ratecount++; 
                            db.updateOne(Sitter, {fname: fname}, {"rating.onestar": onestar});
                            db.updateOne(Sitter, {fname: fname}, {"rating.ratecount": ratecount});
                        } 

        rateavg = ((fivestar*5) + (fourstar*4) + (threestar*3) + (twostar*2) + (onestar)) / ratecount;
        db.updateOne(Sitter, {fname: fname}, {"rating.rateavg": rateavg});

        });

        db.insertOne(Comments, {
            userEmail: email,
            sitterName: fname,
            comment: comment,
            rate: rate
        });

       
        res.redirect(url);
    }
}

module.exports = sitterProfileController;
