'use strict';
const {
  Model
} = require('sequelize');
require('dotenv').config();
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.hasOne(models.cart, { foreignKey: 'userId' });
      users.hasMany(models.products, { foreignKey: 'userId'} );
      users.hasMany(models.orders, { foreignKey: 'userId' });
    }
  }
  users.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
    hooks: {
      beforeCreate: async (user) =>{
        try {
          const saltRounds = parseInt(process.env.BC_SALTROUNDS);
          const salt = await bcrypt.genSalt(saltRounds);
          const passwordHash = await bcrypt.hash(user.password, salt);
          user.password = passwordHash;
        } catch (error) {
          throw error;
        };
      },
    },
  });
  return users;
};