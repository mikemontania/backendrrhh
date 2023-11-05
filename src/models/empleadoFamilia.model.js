const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const Empleado = require('./empleado.model'); // Asegúrate de importar el modelo Empleado
const EstadoCivil = require('./estadoCivil.model'); // Asegúrate de importar el modelo EstadoCivil
const TipoFamilia = require('./tipoFamilia.model'); // Asegúrate de importar el modelo TipoFamilia

const EmpleadoFamilia = sequelize.define('EmpleadoFamilia', {
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  fechaNacimiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  observacion: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  empleadoId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  estadoCivilId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  tipoFamiliaId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'empleado_familias',
  timestamps: false,
  underscored: true, // Convierte automáticamente a snake_case
});

// Definir las relaciones con las tablas relacionadas
EmpleadoFamilia.belongsTo(Empleado, {
  foreignKey: 'empleadoId',
  targetKey: 'id',
});

EmpleadoFamilia.belongsTo(EstadoCivil, {
  foreignKey: 'estadoCivilId',
  targetKey: 'id',
});

EmpleadoFamilia.belongsTo(TipoFamilia, {
  foreignKey: 'tipoFamiliaId',
  targetKey: 'id',
});

// Definir más relaciones según las tablas relacionadas

module.exports = EmpleadoFamilia;
