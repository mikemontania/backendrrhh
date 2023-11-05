const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const Empleado = require('./empleado.model');
const MotivoAusencia = require('./motivoAusencia.model');
const Usuario = require('./usuario.model');

const Ausencia = sequelize.define('Ausencia', {
  empleadosId: {
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
  horaDesde: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  horaHasta: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  motivoId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  comentario: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fechaCarga: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaRegreso: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  dias: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fechaPago: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  monto: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  pagado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  empresasId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'ausencias',
  timestamps: false,
  underscored: true, // Establecer a true para utilizar snake_case
});

// Definir las relaciones con las tablas Empleados, MotivoAusencia y Usuarios
Ausencia.belongsTo(Empleado, {
  foreignKey: 'empleadosId', // snake_case
  targetKey: 'id',
});

Ausencia.belongsTo(MotivoAusencia, {
  foreignKey: 'motivoId', // snake_case
  targetKey: 'id',
});

Ausencia.belongsTo(Usuario, {
  foreignKey: 'usuarioId', // snake_case
  targetKey: 'id',
});

module.exports = Ausencia;
