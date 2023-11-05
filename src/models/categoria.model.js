const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const Categoria = sequelize.define('Categoria', {
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'categoria',
  timestamps: false,
});

module.exports = Categoria;
