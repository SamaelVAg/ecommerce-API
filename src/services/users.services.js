const { users } = require('../models');

class UserServices {
    static async getUserByEmail(email) {
        try {
            const result = await users.findOne({
                where: {email},
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getUserEmail(id){
        try {
            const { email } = await users.findByPk(id);
            return email;
        } catch (error) {
            throw error;
        };
    };
    
    static async add(newUser) {
        try {
            const result = await users.create(newUser);
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async update(id, data) {
        try {
            const result = await users.update(data, {
                where: { id },
            });
            return result;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = UserServices;