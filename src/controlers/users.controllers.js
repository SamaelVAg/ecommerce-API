const AuthServices = require("../services/auth.services");
const CartServices = require("../services/cart.services");
const UserServices = require("../services/users.services");
const transporter = require('../utils/mailer');
require('dotenv').config();


const addUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        let userCreated = await UserServices.add(newUser);
        const { id, username, email } = userCreated;
        await CartServices.crateCart(id);
        res.status(201).send();
        const token = await AuthServices.genToken({
            id,
            email,
            username,
        });
        await transporter.sendMail({
            from: process.env.TM_USERNAME,
            to: userCreated.email,
            subject: 'Please verify your email',
            html: `
                <p>Hi ${userCreated.username} Welcome to Academlo's ecommerce</p>
        <p> Please verify your email by cliking the link below: </p>
        <a href="http://localhost:5173/verify?token=${token}" target="_blank"> validate email. </a>
        `,
        });
    } catch (error) {
        next(error);
    };
};

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.user;
        const { username, avatar } = req.body;
        await UserServices.update(id, { username, avatar });
        res.status(204).send();
    } catch (error) {
        next(error);
    };
};

module.exports = {
    addUser,
    updateUser,
};