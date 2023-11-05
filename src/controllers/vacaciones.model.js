const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const Empleado = require('./empleado.model');
const ConceptoRRHH = require('./conceptoRRHH.model');

const Vacaciones = sequelize.define('Vacaciones', {
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
  usuarioId: {
    type: DataTypes.STRING(100),
    allowNull: true,
    collate: 'Modern_Spanish_CI_AS',
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  mes: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  periodo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  dias: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  monto: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  fechaDesde: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  fechaHasta: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  semanaDesde: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  semanaHasta: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  anulado: {
    type: DataTypes.STRING(2),
    allowNull: true,
    collate: 'Modern_Spanish_CI_AS',
  },
  fechaRetorno: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  montoIps: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  liquidado: {
    type: DataTypes.STRING(2),
    allowNull: true,
    collate: 'Modern_Spanish_CI_AS',
    defaultValue: 'N',
  },
  pagado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  conceptosRrhhId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fechaPago: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
}, {
  tableName: 'vacaciones',
  timestamps: false,
  underscored:true
});
Vacaciones.belongsTo(Empleado, {
  foreignKey: 'empleadosId',
  targetKey: 'id',
});

Vacaciones.belongsTo(ConceptoRRHH, {
  foreignKey: 'conceptosrrhhId', // Nombre en camelCase
  targetKey: 'id',
  as: 'conceptosRRHH',
});
module.exports = Vacaciones;
