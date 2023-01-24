'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.transaksi,{
        foreignKey: "id_transaksi",
          as: "transaksi"//untuk memanggil bisa diganti
        })
        this.belongsTo(models.menu,{
          foreignKey: "id_menu",
            as: "menu"//untuk memanggil bisa diganti
          })
    }
  }
  detail_transaksi.init({
    id_transaksi: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    id_menu: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    price: DataTypes.DOUBLE,
    qty: DataTypes.DOUBLE,
    subtotal: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'detail_transaksi',
    tableName: 'detail_transaksi'
  });
  return detail_transaksi;
};