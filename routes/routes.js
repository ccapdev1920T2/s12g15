
const express = require('express');

const controller = require('../controllers/controller.js');

const signupController = require('../controllers/signupController.js');

const profileController = require('../controllers/profileController.js');

const logInController = require('../controllers/loginController.js');

const editprofileController = require('../controllers/editprofileController.js');

const sitterController = require('../controllers/sitterController.js');

const sitterProfileController = require('../controllers/sitterProfileController.js');

const app = express();

app.get('/', controller.getHome);

app.get('/homelogin/:email', controller.getHomelogin);

app.get('/register', signupController.getSignUp);

app.post('/register', signupController.postSignUp);

app.get('/registerFail', signupController.getRegisterFail);

app.get('/login', logInController.getLogin);

app.post('/login', logInController.checkLogin);

app.get('/profile/:email', profileController.getProfile);

app.get('/editprofile/:email', editprofileController.getEditProfile);

app.post('/editprofile/:email', editprofileController.editProfile);

app.get('/topsitters', sitterController.getSitter);

app.get('/topsitterslogin/:email', sitterController.getSitterLogin);

app.get("/sitterProfile/:email/:fname", sitterProfileController.getSitterProfile);

app.get("/confirmBooking/:email/:fname", sitterProfileController.getConfirmBooking);

app.get("/successConfirm/:email/:fname", sitterProfileController.confirmBooking);

app.get("/comment-rating/:email/:fname", sitterProfileController.getCommentRatingForm);

app.post("/comment-rating/:email/:fname", sitterProfileController.postCommentRatingFrom);

module.exports = app; 
