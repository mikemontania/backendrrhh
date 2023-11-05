const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const Nacionalidad = sequelize.define('Nacionalidad', {
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'nacionalidades',
  timestamps: false,
});

module.exports = Nacionalidad;
