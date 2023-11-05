const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
 
const CuentaCC = sequelize.define('CuentaCC', {
  codigo: {
    type: DataTypes.STRING(13),
    collate: 'Modern_Spanish_CI_AS',
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING(100),
    collate: 'Modern_Spanish_CI_AS',
  },
 
  empresasId: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'cuenta_cc',
  timestamps: false,
  underscored: true, // Establecer a true para utilizar snake_case
});

 
module.exports = CuentaCC;
