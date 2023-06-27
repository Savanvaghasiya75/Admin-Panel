const express = require('express');
const routes = express.Router();
const subCatagoryController = require('../controller/subCatagoryController');
const { route } = require('./catagory');

routes.get('/subCatagoryPage',subCatagoryController.subCatagoryPage);
routes.post('/SubCatagoryValue',subCatagoryController.SubCatagoryValue);
routes.get('/viewSubCatagoryPage',subCatagoryController.viewSubCatagoryPage);
routes.get('/deleteSubCatageryRec',subCatagoryController.deleteSubCatageryRec);
routes.get('/udpateSubCatageryPage',subCatagoryController.udpateSubCatageryPage);

module.exports = routes;