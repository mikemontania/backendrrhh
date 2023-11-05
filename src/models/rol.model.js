const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const Rol = sequelize.define('Rol', {
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'roles',
  timestamps: false,
});

module.exports = Rol;
