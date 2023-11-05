const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const LiquidacionSemanalCab = sequelize.define('LiquidacionSemanalCab', {
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
  subSectorId: {
    type: DataTypes.INTEGER,
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
  fechaCarga: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  totalBruto: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  totalNeto: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  usuario: {
    type: DataTypes.STRING(100),
    allowNull: true,
    collate: 'Modern_Spanish_CI_AS',
  },
  anulado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  fechaAnulacion: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  totalDias: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  liquidado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  fechaLiquidado: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  liquidacionMensualId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cerrado: {
    type: DataTypes.STRING(2),
    allowNull: true,
    collate: 'Modern_Spanish_CI_AS',
  },
}, {
  tableName: 'liquidacion_semanal_cab',
  timestamps: false,
  underscored: true, // Convierte automáticamente a snake_case
});

module.exports = LiquidacionSemanalCab;
