const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const Feriado = sequelize.define('Feriado', {
  fecha: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'feriados',
  timestamps: false,
});

module.exports = Feriado;
