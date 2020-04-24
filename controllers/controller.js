
const db = require('../models/db.js');

const Sitter = require('../models/SitterModel.js');

const User = require('../models/UserModel.js');

const controller = {

    getHome: function (req, res) {
        res.render('home');

        db.findOne(Sitter,{fname: "Tony Stark"},null ,function(result){

            console.log(result);
            
            if(!result) {

                db.insertMany(Sitter,
                    [
                    {fname: "Tony Stark", prefer: "Prefers Dogs", address: "Makati City", available: "Currently Available", image: "/images/tony.jpg"},
                    {fname: "Vikki Rice", prefer: "Prefers Cats", address: "Quezon City",  available: "Currently Available", image: "/images/vikki.jpg"},
                    {fname: "Kaine Moss", prefer: "Prefers Birds", address: "Metro Manila", available: "Currently Available", image: "/images/kaine.jpg"},
                    {fname: "Enzo Povey", prefer: "Prefers Dogs", address: "Cavite", available: "Currently Available",image: "/images/enzo.jpg" },
                    {fname: "Gregg Thorne", prefer: "Prefers Dogs", address: "Pasay City", available: "Currently Available", image: "/images/gregg.jpg"},
                    {fname: "Keagan Stott", prefer: "Prefers Cats", address: "Taft Avenue",available: "Currently Available", image: "/images/keagan.jpg"},
                    {fname: "Roza Rosales", prefer: "Prefers Fishes and Dogs", address: "Makati City", available: "Currently Available", image: "/images/roza.jpg"},
                    {fname: "Vinnie Henderson", prefer: "Prefers Dogs or Cats", address: "San Juan", available: "Currently Available", image: "/images/vinnie.jpg"},
                    {fname: "Lucifer Morningstar", prefer: "Prefers Dogs, Birds and Cats", address: "Paranaque City", available: "Currently Available", image:"/images/lucifer.jpg"},
                    {fname: "Lori Beltran", prefer: "Prefers Fishes", address: "Paranaque City", available: "Currently Available", image: "/images/lori.jpg"}
                    ], function(flag) {
                        if(flag) 
                            console.log('success');
                    });  
            }
            
        });

    },

    getHomelogin: function (req, res) {

       var query = {email: req.params.email};

       var projection = 'uname email address';   
        var query = {email: req.params.email};

        var projection = 'uname email address';
        db.findOne(User, query, projection, function(result) {

            if(result != null) {
                var details = {
                    uname: result.uname,
                    email: result.email,
                    address: result.address
                };

                res.render('homelogin', details);
            }
            else {
                res.render('error');
            }
        });


    },

}


module.exports = controller;
