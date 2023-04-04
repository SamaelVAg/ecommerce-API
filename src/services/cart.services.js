const { cart } = require('../models');

class CartServices {
    static async crateCart(userId) {
        try {
            const result = await cart.create({userId});
            return result;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = CartServices;