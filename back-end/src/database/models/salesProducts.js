module.exports = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('saleProduct', {
    salesId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, 
  {
    tableName: 'salesProducts',
    timestamps: false,
    underscored: true,
  },
  );

  saleProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      through: saleProduct,
      foreignKey: 'saleId', //model de fora
      otherKey: 'productId', // model de dentro
      as: 'products',
    });

    models.product.belongsToMany(models.sale, {
      through: saleProduct,
      foreignKey: 'productId', //model de fora
      otherKey: 'saleId', // model de dentro
      as: 'sales',
    });    
  }

  return saleProduct;
};
