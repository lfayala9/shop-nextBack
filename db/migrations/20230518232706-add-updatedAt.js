'use strict';
const {ProductSchema, PRODUCT_TABLE} = require('./../models/product.model')
const {CategorySchema, CATEGORY_TABLE} = require('../../db/models/category.model')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(PRODUCT_TABLE, 'updated_at', ProductSchema.updatedAt)
    await queryInterface.addColumn(CATEGORY_TABLE, 'updated_at', CategorySchema.updatedAt)
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'updated_at')
    await queryInterface.addColumn(CATEGORY_TABLE, 'updated_at')

  }
};
