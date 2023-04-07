const { Router } = require('express');
const { addUser, updateUser } = require('../controlers/users.controllers');
const { addUserValidator, updateUserValidator } = require('../validators/users.validators');
const authenticate = require('../middlewares/auth.middlewares');

const router = Router();

router
    .post('/users', addUserValidator, addUser)
    .put('/users', authenticate, updateUser)

module.exports = router;