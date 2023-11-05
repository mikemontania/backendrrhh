const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const ConceptoRRHH = require('./conceptoRRHH.model')
const LiquidacionDet = sequelize.define('LiquidacionDet', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  liquidacionCabId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  conceptosRrhhId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cantidad: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  precio: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  montoTotal: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  recibo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'liquidacion_det',
  timestamps: false,
  underscored: true, // Convierte automáticamente a snake_case
});
LiquidacionDet.belongsTo(ConceptoRRHH, {
    foreignKey: 'conceptosrrhhId', // Nombre en camelCase
    targetKey: 'id',
    as: 'conceptosRRHH',
  });
  
module.exports = LiquidacionDet;
