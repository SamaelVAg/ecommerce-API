const { Router } = require('express');
const { userLogIn } = require('../controlers/auth.controlers');

const router = Router();

router.post('/login', userLogIn);

module.exports = router;