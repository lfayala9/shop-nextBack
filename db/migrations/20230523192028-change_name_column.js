'use strict';

const { CUSTOMER_TABLE } =require('./../models/costumer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.renameColumn(CUSTOMER_TABLE, 'first_name', 'name')
  },

  async down (queryInterface) {
    await queryInterface.renameColumn(CUSTOMER_TABLE, 'first_name', 'name')
  }
};
