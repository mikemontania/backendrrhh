const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const AreaPago = sequelize.define('AreaPago', {
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  tableName: 'area_pago',
  timestamps: false,
});

// Definir las relaciones con las tablas relacionadas
// Asegúrate de tener los modelos de las tablas relacionadas definidos

module.exports = AreaPago;
