const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const EstadoCivil = sequelize.define('EstadoCivil', {
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'estado_civil',
  timestamps: false,
});

module.exports = EstadoCivil;
