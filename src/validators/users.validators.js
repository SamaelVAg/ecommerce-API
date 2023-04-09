const { check } = require('express-validator');
const validateResult = require('../utils/validate');

const addUserValidator = [
    check('username', 'Username field error')
        .exists().withMessage('Username must exists')
        .notEmpty().withMessage('Username must have a value')
        .isString().withMessage('Username value must be a String')
        .isLength({ min: 8, max: 30}).withMessage("Username's length must be between 8 and 30 characters"),

    check('email', 'Email field error')
        .exists().withMessage('Email must exists')
        .notEmpty().withMessage('Email must have a value')
        .isEmail().withMessage('Email value is not a valid email format')
        .isLength({ min: 7, max: 30}).withMessage("Email's length must be between 7 and 50 characters"),

    check('password', 'Password field error')
        .exists().withMessage('Password must exists')
        .notEmpty().withMessage('Password must have a value')
        .isAlphanumeric().withMessage('Password have at least one number')
        .isLength({ min: 8, max: 30}).withMessage("Password's length must be at least 8 characters"),
    
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const updateUserValidator = [
    check('username', 'Username field error')
        .exists()
        .isString().withMessage('Username value must be a String')
        .isLength({ min: 8, max: 30}).withMessage("Username's length must be between 8 and 30 characters"),
    
    check('avatar', 'Avatar field error')
        .exists()
        .isURL().withMessage('Avatar value must be a url to the source'),
    
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

module.exports = {
    addUserValidator,
    updateUserValidator,
};