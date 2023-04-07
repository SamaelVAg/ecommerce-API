const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = (req, res, next) => {
    const token = req.headers['access-token'];

    if(!token){
        return next({
            status: 401,
            message: 'Unauthorized',
            error: 'Missing token'
        });
    };
    try {
        const authData = jwt.verify(token, process.env.JWT_SECRET, {
            algorithms: 'HS512',
        });
        req.user = authData;
        next();
    } catch (error) {
        throw error;
    };
};

module.exports = authenticate;