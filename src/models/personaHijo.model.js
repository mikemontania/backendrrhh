const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const Empleado = require('./empleado.model');
const EstadoCivil = require('./estadoCivil.model');
const PersonasHijos = sequelize.define('PersonasHijos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  ci: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  sexo: {
    type: DataTypes.STRING(2),
    allowNull: true,
  },
  fechaNacimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  empleadosId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  estadoCivilId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'personas_hijos',
  timestamps: false,
  underscored: true, // Convierte automáticamente a snake_case
});


PersonasHijos.belongsTo(Empleado, {
  foreignKey: 'empleadosId',
  as: 'empleado',
});

PersonasHijos.belongsTo(EstadoCivil, {
  foreignKey: 'estadoCivilId',
  as: 'estadoCivil',
});

module.exports = PersonasHijos;
