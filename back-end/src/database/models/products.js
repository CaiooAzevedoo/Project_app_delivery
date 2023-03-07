module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    price: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
    },
    urlImage: {
      type: DataTypes.STRING(200),
      allowNull: false,
      default: '',
    },
  },

  {
    tableName: 'products',
    timestamps: false,
    underscored: true,
  });

  product.associate = (models) => {
    product.hasMany(models.salesProduct, { foreignKey: 'productId', as: 'productId' });
  }
  return product;
};
