const userRoutes = require('./users.routes');
const productRoutes = require('./products.routes');
const cartRoutes = require('./cart.routes');
const orderRoutes = require('./orders.routes');
const authRoutes = require('./auth.routes');

const v1 = '/api/v1'

const ApiRoutes = (app) => {
    app.use(v1, userRoutes);
    app.use(v1, authRoutes);
    app.use(v1, productRoutes);
    app.use(v1, cartRoutes);
    app.use(v1, orderRoutes);
};

module.exports = ApiRoutes;