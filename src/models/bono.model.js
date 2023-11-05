const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const Empleado = require('./empleado.model');

const Bonos = sequelize.define('Bono', {
  empleadosId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  funcionario: {
    type: DataTypes.STRING,
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
  fechaCarga: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  monto: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  periodo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'bonos',
  timestamps: false,
  underscored: true,
});

// Definir la relación con la tabla Empleados
Bonos.belongsTo(Empleado, {
  foreignKey: 'empleadosId',
  targetKey: 'id',
});

module.exports = Bonos;
