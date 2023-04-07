const CartServices = require("../services/cart.services");
const UserServices = require("../services/users.services");
const transporter = require('../utils/mailer');
require('dotenv').config();

const showCart = async (req, res, next) => {
    try {
        const { id:userId } = req.user;
        const products = await CartServices.show(userId);
        res.json(products);
    } catch (error) {
        next(error);
    };
};

const addToCart = async (req, res, next) => {
    try {
        const { id:userId } = req.user;
        let data = req.body;
        data.userId = userId;
        await CartServices.add(data);
        res.send('Added succesfully');
    } catch (error) {
        next(error);
    };
};

const purchaseCart = async (req, res, next) => {
    try {
        const { id:userId, username } = req.user;
        const email = await UserServices.getUserEmail(userId);
        await CartServices.purchase(userId);
        res.send('Order done, all products purchased.');
        console.log(userId, username, email)
        await transporter.sendMail({
            from: process.env.TM_USERNAME,
            to: email,
            subject: 'Purchased order',
            html: `
                <p>Hi ${username} Your cart has been purchased!</p>
        <p>For more details please go to Orders on your account.</p>
        `,
        });
    } catch (error) {
        next(error);
    };
};

module.exports = {
    showCart,
    addToCart,
    purchaseCart,
};