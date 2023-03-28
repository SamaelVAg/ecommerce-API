'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orders.belongsTo(models.users, { foreignKey: 'userId' });
      orders.hasMany(models.productsInOrder, { foreignKey: 'orderId'});
    }
  }
  orders.init({
    totalPrice: DataTypes.FLOAT,
    userId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};