const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const Pais = sequelize.define('Pais', {
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'paises',
  timestamps: false,
});

module.exports = Pais;
