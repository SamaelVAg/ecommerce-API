const { check } = require('express-validator');
const validateResult = require('../utils/validate');

const addToCartValidator = [
    check('productId', 'Product ID field error')
        .exists().withMessage('Product ID must exists')
        .notEmpty().withMessage('Product ID must have a value')
        .isInt().withMessage('Product ID must be an integer'),

    check('quantity', 'Quantity field error')
        .exists().withMessage('Quantity must exists')
        .notEmpty().withMessage('Quantity must have a value')
        .isInt().withMessage('Quantity must be an integer'),

    (req, res, next) => {
        validateResult(req, res, next);
    },
];

module.exports = {
    addToCartValidator,
};