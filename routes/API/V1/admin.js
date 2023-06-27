const express = require('express');
const routes = express.Router();
const ApiBookController = require('../../../controller/API/V1/ApiBookController');

routes.get('/apiAddDetalis',ApiBookController.apiAddDetalis);

module.exports = routes;