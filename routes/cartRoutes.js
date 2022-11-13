const express = require('express');
const api = express.Router();
const cartController = require('../controllers/cartController');

api.post('/carts', cartController.getCart);
api.post('/cart', cartController.createCart);
api.post('/cart/update/:id', cartController.updateCart);
api.post('/cart/delete/:id', cartController.deleteCart);
api.post('/cart/search/:id', cartController.getCarts);

module.exports = api;