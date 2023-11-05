const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const Localidad = sequelize.define('Localidad', {
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'localidad',
  timestamps: false,
});

module.exports = Localidad;
