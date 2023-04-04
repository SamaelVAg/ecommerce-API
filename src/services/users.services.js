const { users } = require('../models');

class UserServices {
    static async add(newUser) {
        try {
            const result = await users.create(newUser);
            return result;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = UserServices;