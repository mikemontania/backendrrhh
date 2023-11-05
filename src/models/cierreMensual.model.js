const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const Empresa = require('./empresa.model');
const AreaPago = require('./areaPago.model');
const Sucursal = require('./sucursal.model');

const CierreMensual = sequelize.define('CierreMensual', {
  fecha: {
    type: DataTypes.DATE,
  },
  mes: {
    type: DataTypes.INTEGER,
  },
  periodo: {
    type: DataTypes.INTEGER,
  },
  empresasId: {
    type: DataTypes.INTEGER,
  },
  anulado: {
    type: DataTypes.STRING(2),
    defaultValue: 'N',
  },
  notificado: {
    type: DataTypes.STRING(2),
    defaultValue: 'N',
  },
  cerrado: {
    type: DataTypes.STRING(2),
    defaultValue: 'N',
  },
  areaPagoId: {
    type: DataTypes.INTEGER,
  },
  sucursalId: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'cierre_mensual',
  timestamps: false,
  underscored: true, // Establecer a true para utilizar snake_case
});

// Definir la relación con la tabla Empresas
CierreMensual.belongsTo(Empresa, {
  foreignKey: 'empresasId',
  targetKey: 'id',
});

// Definir la relación con la tabla AreaPago
CierreMensual.belongsTo(AreaPago, {
  foreignKey: 'areaPagoId',
  targetKey: 'id',
});

// Definir la relación con la tabla Sucursales
CierreMensual.belongsTo(Sucursal, {
  foreignKey: 'sucursalId',
  targetKey: 'id',
});

module.exports = CierreMensual;
