const express = require('express');
const routes = express.Router();
const AdminController = require('../controller/AdminController');
const CatagoryController= require('../controller/CatagoryController');
const passport = require('passport');
const Admin = require('../models/admin');
const Catagory = require('../models/catagory');


routes.get('/',AdminController.login);
routes.get('/dashboard',passport.checkAuthentication,AdminController.dashboard);
routes.get('/add_admin',AdminController.addAdmin);
routes.post('/insert_admin',AdminController.insert_admin);
routes.get('/view_admin',AdminController.viewAdmin);
routes.get('/updatePage',AdminController.updatePage);
routes.get('/deleteData',AdminController.deleteRecord);
routes.post('/updateRecord',AdminController.updateRecord)
routes.post('/checkLogin',passport.authenticate('local',{failureRedirect : '/'}) ,AdminController.checkLogin);
routes.get('/password_page',AdminController.password_page);
routes.post('/change_password',AdminController.change_password);
routes.get('/viewProfile',AdminController.viewProfile);
routes.get('/logout',AdminController.logout);
routes.get('/forgotPass',AdminController.forgotPass);
routes.post('/otpForgot',AdminController.otpForgot);
routes.get('/checkOtp',AdminController.checkOtp);
routes.post('/finalOtp',AdminController.finalOtp);
routes.get('/generateNewPass',AdminController.generateNewPass)
routes.post('/ResetPassword',AdminController.ResetPassword)

// Catagory
routes.use('/Catagory',require('./catagory'));
routes.use('/SubCatagory',require('./subCatagory'));
routes.use('/api',require('./API/V1/admin'));

module.exports = routes;