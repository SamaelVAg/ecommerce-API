const { orders, products, productsInOrder } = require('../models');

class OrdersServices {
    static async get(userId) {
        try {
            const result = await orders.findAll({
                where: { userId },
                attributes: { exclude: ['userId'] },
                include: {
                    model: productsInOrder,
                    attributes: { exclude: ['productId', 'orderId', 'createdAt', 'updatedAt'] },
                    include: {
                        model: products,
                        attributes: ['id', 'name'],
                    },
                },
            });
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async create(data) {
        try {
            const { userId, totalPrice, productList } = data;
            const { id:orderId } = await orders.create({
                userId,
                totalPrice,
            });
            const orderProducts = productList.map(item => {
                const { productId, quantity, price } = item
                const product = {
                    orderId,
                    productId,
                    quantity,
                    price
                };
                return product;
            });
            console.log(orderProducts)
            await productsInOrder.bulkCreate(orderProducts);
            return;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = OrdersServices;
