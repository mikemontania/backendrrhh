const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig'); // Asegúrate de importar la instancia de Sequelize
const EmpleadoCuotas = sequelize.define('EmpleadoCuotas', {
 
  empleadosId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  montoCuota: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  nroCuota: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cantCuotas: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fechaCarga: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaVencimiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  pagado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  saldo: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  debitoCreditoId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'empleado_cuotas', // Nombre de la tabla en la base de datos
  timestamps: false, // Esto desactiva la gestión automática de campos de fecha
  underscored: true, // Convierte automáticamente a snake_case
});

module.exports = EmpleadoCuotas;
