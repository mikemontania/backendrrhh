const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig'); // Asegúrate de importar la instancia de Sequelize

const TipoDia = sequelize.define('TipoDia', {
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
  tableName: 'tipo_dia',
  timestamps: false,
});

module.exports = TipoDia;
