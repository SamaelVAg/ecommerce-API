const { Router } = require('express');
const { getAvailableProducts, createProduct, updateProductDescription } = require('../controlers/products.controllers');
const authenticate = require('../middlewares/auth.middlewares');
const { addProductValidator, updateProductDescriptionValidator } = require('../validators/products.validators');

const router = Router();

router
    .get('/products', getAvailableProducts)
    .post('/products', authenticate, addProductValidator, createProduct)
    .put('/products/:id', authenticate, updateProductDescriptionValidator,updateProductDescription)
module.exports = router;