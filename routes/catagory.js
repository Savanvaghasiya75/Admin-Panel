const express = require('express');
const routes = express.Router();
const CatagoryController = require('../controller/CatagoryController');
const Catagory = require('../models/catagory');

routes.get('/AddCatagory',CatagoryController.AddCatagory);
routes.post('/AddCatagoryInfo',CatagoryController.AddCatagoryInfo);
routes.get('/viewCatagoryPage',CatagoryController.viewCatagoryPage);
routes.get('/udpateCatagoroy/:id',CatagoryController.udpateCatagoroy);
routes.get('/deleteCatagoroy/:id',CatagoryController.deleteCatagoroy);
routes.post('/updateCatagoryData',CatagoryController.updateCatagoryData)

module.exports = routes;