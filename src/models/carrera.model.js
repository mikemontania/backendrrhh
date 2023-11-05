const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const Carrera = sequelize.define('Carrera', {
  descripcion: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
}, {
  tableName: 'carreras',
  timestamps: false,
});

// Definir las relaciones con las tablas relacionadas
// Asegúrate de tener los modelos de las tablas relacionadas definidos

module.exports = Carrera;

