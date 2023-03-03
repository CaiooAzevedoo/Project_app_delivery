module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
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

    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(20),
      defaultValue: "customer",
    },

  },

  {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  user.associate = (models) => {
    user.hasMany(models.sale, { foreignKey: 'userId', as: 'customer' });
    user.hasMany(models.sale, { foreignKey: 'sellerId', as: 'seller' });
  }
  return user;
};
