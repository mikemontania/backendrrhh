const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const LiquidacionSemanalDet = sequelize.define('LiquidacionSemanalDet', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  liquidacionSemanalCabId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  conceptoRrhhId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cantidad: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  monto: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
}, {
  tableName: 'liquidacion_semanal_det',
  timestamps: false,
  underscored: true, // Convierte automáticamente a snake_case
});

module.exports = LiquidacionSemanalDet;
