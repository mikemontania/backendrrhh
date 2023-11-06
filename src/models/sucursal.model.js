const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const Empresa = require('./empresa.model');

const Sucursal = sequelize.define('Sucursal', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  direccion: {
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
  patronal: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'sucursales',
  timestamps: false,
});

// Definir la relación con la tabla de empresas
Sucursal.belongsTo(Empresa, {
  foreignKey: 'empresasId',
  targetKey: 'id',
});

module.exports = Sucursal;
