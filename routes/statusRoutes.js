const express = require('express');
const api = express.Router();
const statusController = require('../controllers/statusController');

api.post('/status:id', statusController.createStatus);
api.post('/statuses', statusController.getStatus);
api.post('/status/search/:id', statusController.getStatus);
api.post('/status/:id', statusController.updateStatus);
api.post('/status/:id', statusController.deleteStatus);

module.exports = api;