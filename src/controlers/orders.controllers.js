const OrdersServices = require("../services/orders.services");

const getOrders = async (req, res, next) => {
    try {
        const { id:userId } = req.user;
        const orders = await OrdersServices.get(userId);
        res.json(orders);
    } catch (error) {
        next(error);
    };
};

module.exports = {
    getOrders,
};