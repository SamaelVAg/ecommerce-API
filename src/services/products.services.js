const { Op } = require('sequelize');
const { products, users } = require('../models');

class ProductsServices {
    static async getAvailable() {
        try {
            const result = await products.findAll({
                where: {
                    availableQty: {
                        [Op.gt]: 0,
                    },
                },
                attributes: { 
                    exclude:['createdAt', 'updatedAt'] 
                },
                include: {
                    model: users,
                    attributes: ['username'],
                }
            });
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async create(data) {
        try {
            const { availableQty, stock } = data;
            
            if(
                !availableQty || 
                availableQty === 0 || 
                stock === false
            ) {
                data.availableQty = 0;
                data.stock = false;
            };
            
            if(!availableQty && stock === true) {
                data.availableQty = 0;
                data.stock = false;
            }

            if(availableQty > 0) {
                data.stock = true;
            };

            const result = await products.create(data);
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async updateDescription(data) {
        try {
            const { authId, id, description } = data;
            const { userId } = await products.findByPk(id, {
                attributes: ['userId'],
            });
            if(authId !== userId){
                throw {
                    status: 401,
                    message: 'Product is not selled by the providen User'
                }
            }
            await products.update({ description }, {
                where: { id },
            });
            return;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = ProductsServices;