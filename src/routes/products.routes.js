const { Router } = require('express');
const { getAvailableProducts, createProduct, updateProductDescription } = require('../controlers/products.controllers');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

router
    .get('/products', getAvailableProducts)
    .post('/products', authenticate, createProduct)
    .put('/products/:id', authenticate,updateProductDescription)
module.exports = router;