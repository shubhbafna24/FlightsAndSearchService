'use strict';

const { create, update } = require('../controllers/city-controller');
const city = require('../models/city');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports',[
    {
      name:'Kempegowda Internationl Airport',
      cityId:4,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:'Mysuru Airport',
      cityId:4,
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      name:'Mengaluru Airport',
      cityId:4,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:'Indra Gandhi International Airport',
      cityId:2,
      createdAt:new Date(),
      updatedAt:new Date()
    }
  ],{})
  },

  async down (queryInterface, Sequelize) {
    /*
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
