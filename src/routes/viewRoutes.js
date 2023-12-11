const express = require('express');
const router = express.Router();
const ProductManager = require('../managers/productManager');

router.get('/', (req, res) => {
  res.render('home', { products: ProductManager.getProducts() });
});

router.get('/real-time', (req, res) => {
  res.render('realTimeProducts', { products: ProductManager.getProducts() });
});

module.exports = router;