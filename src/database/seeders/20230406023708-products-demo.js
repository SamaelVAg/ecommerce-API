'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
    {
      name: 'Polo',
      description: 'Polo T-Shirt made of 100% cotton',
      price: 25.00,
      availableQty: 15,
      stock: true,
      userId: 1,
      productImg: 'https://picsum.photos/200/300',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Stripped shirt',
      description: 'Blue and white big strips shirt, slim fitted',
      price: 50.00,
      availableQty: 3,
      stock: true,
      userId: 1,
      productImg: 'https://picsum.photos/200/300',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Khaki shorts',
      description: 'Summer season khaki shorts for men',
      price: 39.99,
      availableQty: 12,
      stock: true,
      userId: 2,
      productImg: 'https://picsum.photos/200/300',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Blue Crocs sandals',
      description: 'Comfortable sandals, they are perfect for indoors or pool time',
      price: 32.00,
      userId: 2,
      productImg: 'https://picsum.photos/200/300',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Fashion denim jeans',
      description: 'Slim fitted denim jeans',
      price: 60.00,
      availableQty: 2,
      stock: true,
      userId: 2,
      productImg: 'https://picsum.photos/200/300',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
