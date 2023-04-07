const AuthServices = require("../services/auth.services");
const UserServices = require("../services/users.services");
const bcrypt = require('bcrypt');

const userLogIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserServices.getUserByEmail(email);
        if(!user){
            return next({
                status: 400,
                message: 'Email does not exists',
                error: 'User not found'
            });
        };
        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid){
            return next({
                status: 400,
                message: 'Wrong passwword',
                error: 'Incorrect user or passord'
            });
        };
        const { id, username } = user;
        const token = AuthServices.genToken({ id, username });
        res.json({
            id,
            username,
            email,
            token,
        });
    } catch (error) {
        next(error);
    };
};

module.exports = {
    userLogIn,
};