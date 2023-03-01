module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    deliveryNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }, 
  {
    tableName: 'sales',
    timestamps: false,
    underscored: true,
  }
  );
  sale.associate = (models) => {
    sale.belongsTo(models.user, { foreignKey: 'userId', as: 'customer' });
    sale.belongsTo(models.user, { foreignKey: 'sellerId', as: 'seller' });
  }
  return sale;
};
