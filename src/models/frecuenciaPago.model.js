const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const FrecuenciaPago = sequelize.define('FrecuenciaPago', {
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'frecuencia_pago',
  timestamps: false,
});

module.exports = FrecuenciaPago;
