const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const Empresa = sequelize.define('Empresa', {
  razon_social: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nombreComercial: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ruc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'empresas',
  timestamps: false, // Puedes deshabilitar los campos de timestamp si no los necesitas
  underscored: true, // Convierte automáticamente a snake_case

});

module.exports = Empresa;
