'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,        
       },
       name: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       email: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       password: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       role: {
        type: Sequelize.STRING,
        defaultValue: "customer",
       },
     });
  },

  down: async (queryInterface, _Sequelize) => {

    await queryInterface.dropTable('users');

  },
}; 
