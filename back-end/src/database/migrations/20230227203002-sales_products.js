'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales_products', {
      saleId:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        foreignKey: true,
        field: 'sale_id',
        references:{
          model: 'sales',
          key: 'id',

        },
       },
       productId:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        foreignKey: true,
        field: 'product_id',
        references:{
          model: 'products',
          key: 'id',
        },   
       },
       quantity:{
        type:Sequelize.INTEGER,
        allowNull: false,
       },
     });
  },

  down: async (queryInterface, _Sequelize) => {

    await queryInterface.dropTable('sales_products');

  },
};
