const { Router } = require('express');
const authenticate = require('../middlewares/auth.middlewares');
const { getOrders } = require('../controlers/orders.controllers');

const router = Router();

router.get('/orders', authenticate, getOrders);

module.exports = router;