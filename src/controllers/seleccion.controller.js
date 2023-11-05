const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig'); // Asegúrate de importar la instancia de Sequelize

const Seleccion = sequelize.define('Seleccion', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
}, {
  tableName: 'seleccion',
  timestamps: false,
});

module.exports = Seleccion;
