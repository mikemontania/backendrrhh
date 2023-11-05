const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const Empleado = require('./empleado.model'); // Asegúrate de importar el modelo Empleados
const MotivoDespido = require('./motivoDespido.model'); // Asegúrate de importar el modelo MotivosDespidos

const DesvinculacionCab = sequelize.define('DesvinculacionCab', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  empleadosId: {
    type: DataTypes.INTEGER,
  },
  empresasId: {
    type: DataTypes.INTEGER,
  },
  fecha: {
    type: DataTypes.DATE,
  },
  montoDebito: {
    type: DataTypes.DECIMAL(18, 2),
  },
  montoCredito: {
    type: DataTypes.DECIMAL(18, 2),
  },
  montoNeto: {
    type: DataTypes.DECIMAL(18, 2),
  },
  usuario: {
    type: DataTypes.STRING(100),
    collate: 'Modern_Spanish_CI_AS',
  },
  mes: {
    type: DataTypes.INTEGER,
  },
  // Agrega las otras columnas de la tabla aquí
}, {
  tableName: 'desvinculacion_cab',
  timestamps: false,
  underscored: true, // Establecer a true para utilizar snake_case
});

// Definir la relación con las tablas relacionadas
DesvinculacionCab.belongsTo(Empleado, {
  foreignKey: 'empleadosId',
  targetKey: 'id',
  as: 'empleado',
});

DesvinculacionCab.belongsTo(MotivoDespido, {
  foreignKey: 'motivoId',
  targetKey: 'id',
  as: 'motivoDespido',
});

module.exports = DesvinculacionCab;
