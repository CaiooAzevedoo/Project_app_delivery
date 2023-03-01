'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,        
       },
       userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        foreignKey: true,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      sellerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        foreignKey: true,
        field: 'seller_id',
        references: {
          model: 'sales',
          key: 'id',
        },
      },
      totalPrice: Sequelize.DECIMAL(9,2),
      deliveryAddress: Sequelize.STRING,
      deliveryNumber: Sequelize.STRING,
      saleDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      status: Sequelize.STRING,
     });
  },

  down: async (queryInterface, _Sequelize) => {

    await queryInterface.dropTable('sales');

  },
};
