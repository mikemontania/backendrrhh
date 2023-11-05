const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const Empleado = require('./empleado.model'); // Asegúrate de importar el modelo Empleados
const Concepto = require('./concepto.model'); // Asegúrate de importar el modelo Conceptos

const EmpleadoConceptos = sequelize.define('EmpleadoConceptos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  empleadosId: {
    type: DataTypes.INTEGER,
  },
  conceptosId: {
    type: DataTypes.INTEGER,
  },
  activo: {
    type: DataTypes.STRING(2),
  },
  tipoConcepto: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'empleado_conceptos',
  timestamps: false,
});

// Definir la relación con la tabla empleados
EmpleadoConceptos.belongsTo(Empleado, {
  foreignKey: 'empleadosId',
  targetKey: 'id',
  as: 'empleado',
});

// Definir la relación con la tabla conceptos
EmpleadoConceptos.belongsTo(Concepto, {
  foreignKey: 'conceptosId',
  targetKey: 'id',
  as: 'concepto',
});

module.exports = EmpleadoConceptos;
