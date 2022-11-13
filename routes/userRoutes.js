const express = require('express');
const api = express.Router();
const statusController = require('../controllers/userController');

api.post('/user', statusController.createUser);
api.post('/user', statusController.getUsers);
api.post('/user', statusController.getUser);
api.post('/user', statusController.updateUser);
api.post('/user', statusController.deleteUser);
api.post('/user', statusController.login);

module.exports = api;