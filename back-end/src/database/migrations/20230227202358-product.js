'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
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
       price: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: false,
       },
       urlImage: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'url_image',
       },
     });
  },

  down: async (queryInterface, _Sequelize) => {

    await queryInterface.dropTable('products');

  },
};
