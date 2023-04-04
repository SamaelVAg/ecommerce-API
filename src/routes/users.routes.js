const { Router } = require('express');
const { addUser } = require('../controlers/users.controllers');

const router = Router();

router.post('/users', addUser);

module.exports = router;