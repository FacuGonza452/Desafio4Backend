const express = require('express');
const router = express.Router();
const ProductManager = require('../managers/productManager');

router.post('/create', (req, res) => {
  const product = req.body.product;
  if (product) {
    ProductManager.addProduct(product);
    res.send('Producto creado exitosamente');
  } else {
    res.status(400).send('Error: El producto no es válido');
  }
});

router.post('/delete', (req, res) => {
  const productId = req.body.productId;
  if (productId) {
    ProductManager.deleteProduct(productId);
    res.send('Producto eliminado exitosamente');
  } else {
    res.status(400).send('Error: Identificador de producto no válido');
  }
});

module.exports = router;