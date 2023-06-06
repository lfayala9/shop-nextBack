'use strict';

// const { DataTypes } =require('sequelize');
const { PRODUCT_TABLE, ProductSchema } =require('./../models/product.model');

/**@type {import('sequelize-cli').Migration} */
module.exports= {
  up:async(queryInterface)=> {
    await queryInterface.addColumn(PRODUCT_TABLE, 'image', ProductSchema.image)
  },

  down:async(queryInterface)=> {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'image')
  },
};


