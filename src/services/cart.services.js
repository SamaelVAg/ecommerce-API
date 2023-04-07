const { cart, products, productsInCart } = require('../models');
const OrdersServices = require('./orders.services');

class CartServices {
    static async crateCart(userId) {
        try {
            const result = await cart.create({userId});
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async show(userId) {
        try {
            const { id:cartId, totalPrice:total } = await cart.findByPk(userId);
            const productList = await productsInCart.findAll({
                where: { cartId },
                attributes: ['quantity'],
                include: {
                    model: products,
                    attributes: ['id', 'name', 'price', 'productImg']
                }
            });
            const result = {
                products: productList,
                total
            }
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async add(data) {
        try {
            const { userId, productId, quantity } = data;
            const { id:cartId } = await cart.findOne({
                where: { userId },
            });
            const { price } = await products.findByPk(productId);
            const total = quantity * price;
            const product = {
                cartId,
                productId,
                quantity,
                price,
            };
            await productsInCart.create(product);
            await cart.increment({ totalPrice: total }, { where: { id: cartId } });
            return;
        } catch (error) {
            throw error;
        };
    };

    static async purchase(userId) {
        try {
            const { id:cartId, totalPrice } = await cart.findByPk(userId);
            const productList = await productsInCart.findAll({
                where: { cartId },
                attributes: ['productId', 'quantity', 'price']
            });
            const data = {
                userId,
                productList,
                totalPrice
            };
            await OrdersServices.create(data);
            await cart.update({ totalPrice:0.00 }, { where: { id:cartId } });
            await productsInCart.destroy({
                where: { cartId },
            });
            return;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = CartServices;