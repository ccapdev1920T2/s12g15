
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

app.get('/checkEmail', signupController.checkEmail);

app.get('/checkUname', signupController.checkUname);

app.post('/register', signupController.postSignUp);

app.get('/registerFail', signupController.getRegisterFail);

app.get('/login', logInController.getLogin);

app.get('/checkEmailLogin', logInController.checkEmailLogin);

app.post('/login', logInController.checkLogin);

app.get('/profile/:email', profileController.getProfile);

app.get('/editprofile/:email', editprofileController.getEditProfile);

app.post('/editprofile/:email', editprofileController.editProfile);

app.get('/topsitters', sitterController.getSitter);

app.get('/topsitterslogin/:email', sitterController.getSitterLogin);

app.get("/sitterProfile/:email/:fname", sitterProfileController.getSitterProfile);

app.get("/successConfirm/:email/:fname", sitterProfileController.confirmBooking);

app.get('/changeuser/:email', editprofileController.getEditUser);

app.post('/changeuser/:email', editprofileController.editUser);

app.get('/changeaddress/:email', editprofileController.getEditAddress);

app.post('/changeaddress/:email', editprofileController.editAddress);

app.get('/changepw/:email', editprofileController.getEditPW);

app.post ('/changepw/:email', editprofileController.editPW);

app.post("/sitterProfile/:email/:fname", sitterProfileController.postCommentRatingFrom);

app.get("/successCancel/:email/:sitterName", profileController.endBooking);

module.exports = app; 
