const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const Empleado = require('./empleado.model'); // Asegúrate de importar el modelo de empleado

const SalarioDetalle = sequelize.define('SalarioDetalle', {
  fecha: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  monto: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  observacion: {
    type: DataTypes.STRING(80),
    collate: 'Modern_Spanish_CI_AS',
    allowNull: true,
  },
  activo: {
    type: DataTypes.STRING(2),
    collate: 'Modern_Spanish_CI_AS',
    defaultValue: 'S',
    allowNull: true,
  },
}, {
  tableName: 'salarios_detalle',
  timestamps: false,
  underscored: true, // Convierte automáticamente a snake_case

});

// Definir la relación con la tabla Empleados
SalarioDetalle.belongsTo(Empleado, {
  foreignKey: 'empleadoId',
  targetKey: 'id',
});

module.exports = SalarioDetalle;
