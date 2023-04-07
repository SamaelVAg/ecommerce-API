const { Router } = require('express');
const authenticate = require('../middlewares/auth.middlewares');
const { addToCart, showCart, purchaseCart } = require('../controlers/cart.controllers');

const router = Router();

router
    .get('/cart', authenticate, showCart)
    .post('/cart', authenticate, addToCart)
    .delete('/cart', authenticate, purchaseCart)

module.exports = router;