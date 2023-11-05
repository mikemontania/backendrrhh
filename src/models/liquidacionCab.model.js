const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const Empleado = require('./empleado.model'); // Asegúrate de importar el modelo TipoDia

const LiquidacionCab = sequelize.define('LiquidacionCab', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  empleadosId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  sucursalesId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  empresasId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaDesde: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaHasta: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  montoTotal: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  sectorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  subSectorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  anulado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  fechaAnulacion: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  mes: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  anho: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  areaPagoId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cerrado: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  esPrestadorServicio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nroFactura: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  primerPago: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  segundoPago: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'liquidacion_cab',
  timestamps: false,
  underscored: true, // Convierte automáticamente a snake_case
});
LiquidacionCab.belongsTo(Empleado, {
  foreignKey: 'empleadosId',
  targetKey: 'id',
});
module.exports = LiquidacionCab;
