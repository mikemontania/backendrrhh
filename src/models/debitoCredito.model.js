const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const ConceptoRRHH = require('./conceptoRRHH.model'); // Asegúrate de importar el modelo ConceptosRRHH
const Empleado = require('./empleado.model'); // Asegúrate de importar el modelo Empleados

const DebitoCredito = sequelize.define('DebitoCredito', {
  monto: {
    type: DataTypes.DECIMAL(18, 2),
  },
  conceptosRrhhId: {
    type: DataTypes.INTEGER,
  },
  fecha: {
    type: DataTypes.DATE,
  },
  fechaCarga: {
    type: DataTypes.DATE,
  },
  usuario: {
    type: DataTypes.STRING(100),
    collate: 'Modern_Spanish_CI_AS',
  },
  observacion: {
    type: DataTypes.STRING(500),
    collate: 'Modern_Spanish_CI_AS',
  },
  empleadosId: {
    type: DataTypes.INTEGER,
  },
  tipoPrestamo: {
    type: DataTypes.INTEGER,
  },
  cantCuotas: {
    type: DataTypes.INTEGER,
  },
  sectorId: {
    type: DataTypes.INTEGER,
  },
  subSectorId: {
    type: DataTypes.INTEGER,
  },
  periodo: {
    type: DataTypes.INTEGER,
  },
  anulado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  fechaAnulacion: {
    type: DataTypes.DATE,
  },
  showroom: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  notificado: {
    type: DataTypes.STRING(2),
    collate: 'Modern_Spanish_CI_AS',
    defaultValue: 'N',
  },
  cerrado: {
    type: DataTypes.STRING(2),
    collate: 'Modern_Spanish_CI_AS',
    defaultValue: 'N',
  },
  pagado: {
    type: DataTypes.BOOLEAN,
  },
  fechaConcesion: {
    type: DataTypes.DATE,
  },
  saldoPrestamo: {
    type: DataTypes.DECIMAL(18, 2),
  },
  empresasId: {
    type: DataTypes.INTEGER,
  },
  cantidad: {
    type: DataTypes.DECIMAL(18, 2),
  },
}, {
  timestamps: false,
  underscored: true, // Establecer a true para utilizar snake_case
});

// Definir las relaciones con las tablas relacionadas
DebitoCredito.belongsTo(ConceptoRRHH, {
  foreignKey: 'conceptosRrhhId',
  targetKey: 'id',
  as: 'conceptosRRHH',
});

DebitoCredito.belongsTo(Empleado, {
  foreignKey: 'empleadosId',
  targetKey: 'id',
});

module.exports = DebitoCredito;
