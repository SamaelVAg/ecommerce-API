const ProductsServices = require("../services/products.services");

const getAvailableProducts = async (req, res, next) => {
    try {
        const products = await ProductsServices.getAvailable();
        res.json(products);
    } catch (error) {
        next(error);
    };
};

const createProduct = async (req, res, next) => {
    try {
        const { id } = req.user;
        let data = req.body;
        data.userId = id;
        const productCreated = await ProductsServices.create(data);
        res.status(201).json(productCreated);
    } catch (error) {
        next(error);
    };
};

const updateProductDescription = async (req, res, next) => {
    try {
        const { id:authId } = req.user;
        const { id } = req.params;
        const { description } = req.body;
        
        await ProductsServices.updateDescription({authId, id, description});
        res.status(204).send();
    } catch (error) {
        next(error);
    };
};

module.exports = {
    getAvailableProducts,
    createProduct,
    updateProductDescription,
}