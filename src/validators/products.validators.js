const { check, param } = require('express-validator');
const validateResult = require('../utils/validate');

const addProductValidator = [
    check('name', 'Name field error')
        .exists().withMessage('Name must exists')
        .notEmpty().withMessage('Name must have a value')
        .isString().withMessage('Name value must be a String'),

    check('description', 'Description field error')
        .exists().withMessage('Description must exists')
        .notEmpty().withMessage('Description must have a value')
        .isString().withMessage('Description value must be a String'),

    check('price', 'Price field error')
        .exists().withMessage('Price must exists')
        .notEmpty().withMessage('Price must have a value')
        .isFloat().withMessage('Price must be a number'),
        
    check('productImg', 'Product image field error')
        .exists().withMessage('Product image must exists')
        .notEmpty().withMessage('Product image must have a value')
        .isURL().withMessage('Product image value must be a String'),

    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const updateProductDescriptionValidator = [
    param('id').isInt().withMessage('Id must be an integer'),
    
    check('description', 'Description field error')
        .exists().withMessage('Name must exists')
        .notEmpty().withMessage('Name must have a value')
        .isString().withMessage('Name value must be a String'),

    (req, res, next) => {
        validateResult(req, res, next);
    },
];

module.exports = {
    addProductValidator,
    updateProductDescriptionValidator
};