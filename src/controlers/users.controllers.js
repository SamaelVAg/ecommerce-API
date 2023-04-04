const CartServices = require("../services/cart.services");
const UserServices = require("../services/users.services");


const addUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        let userCreated = await UserServices.add(newUser);
        const userId = userCreated.id
        const cartCreated = await CartServices.crateCart(userId);
        res.status(201).json(userCreated);
    } catch (error) {
        res.status(400).json(error);
    };
};

module.exports = {
    addUser,
};