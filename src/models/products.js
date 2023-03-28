'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.belongsTo(models.users, { foreignKey: 'userId' });
      products.hasMany(models.productsInOrder, { foreignKey: 'productId' });
      products.hasMany(models.productsInCart, { foreignKey: 'productId' });
    }
  }
  products.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    availableQty: DataTypes.INTEGER,
    stock: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    productImg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};