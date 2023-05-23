'use strict';

// const { DataTypes, Sequelize } =require('sequelize');
const { USER_TABLE } =require('./../models/user.model');
const { CUSTOMER_TABLE } =require('./../models/costumer.model');
const { CATEGORY_TABLE } =require('./../models/category.model');
const { PRODUCT_TABLE } =require('./../models/product.model');
const { ORDER_TABLE } =require('./../models/order.model');
const { ORDER_PRODUCT_TABLE } =require('./../models/order-product.model');

/**@type {import('sequelize-cli').Migration} */
module.exports= {
  up:async(queryInterface)=> {
    await queryInterface.renameColumn(CUSTOMER_TABLE, 'create_at', 'created_at');
    await queryInterface.renameColumn(USER_TABLE, 'create_at', 'created_at');
    await queryInterface.renameColumn(CATEGORY_TABLE, 'create_at', 'created_at');
    await queryInterface.renameColumn(PRODUCT_TABLE, 'create_at', 'created_at');
    await queryInterface.renameColumn(ORDER_TABLE, 'create_at', 'created_at');
    await queryInterface.renameColumn(ORDER_PRODUCT_TABLE, 'create_at', 'created_at');

  },

  down:async(queryInterface)=> {
    await queryInterface.renameColumn(CUSTOMER_TABLE, 'create_at', 'created_at');
    await queryInterface.renameColumn(USER_TABLE, 'create_at', 'created_at');
    await queryInterface.renameColumn(CATEGORY_TABLE, 'create_at', 'created_at');
    await queryInterface.renameColumn(PRODUCT_TABLE, 'create_at', 'created_at');
    await queryInterface.renameColumn(ORDER_TABLE, 'create_at', 'created_at');
    await queryInterface.renameColumn(ORDER_PRODUCT_TABLE, 'create_at', 'created_at');
  },
};


