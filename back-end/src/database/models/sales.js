const moment = require("moment/moment");

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
      get() {
        return moment(this.getDataValue('saleDate')).format('DD/MM/YYYY');
      },
      // https://stackoverflow.com/questions/16847672/is-there-a-simple-way-to-make-sequelize-return-its-date-time-fields-in-a-partic
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }, 
  {
    timestamps: false,
    underscored: true,
  }
  );
  sale.associate = (models) => {
    sale.belongsTo(models.user, { foreignKey: 'userId', as: 'user' });
    sale.belongsTo(models.user, { foreignKey: 'sellerId', as: 'seller' });
  }
  return sale;
};
