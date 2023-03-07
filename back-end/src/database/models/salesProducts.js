module.exports = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('salesProduct', {
    sale_id: {
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
    tableName: 'sales_products',
    timestamps: false,
    underscored: true,
  },
  );

  saleProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      through: saleProduct,
      foreignKey: 'sale_id', //model de fora
      otherKey: 'productId', // model de dentro
      as: 'products',
    });

    models.product.belongsToMany(models.sale, {
      through: saleProduct,
      foreignKey: 'productId', //model de fora
      otherKey: 'sale_id', // model de dentro
      as: 'sales',
    });    
  }

  return saleProduct;
};
