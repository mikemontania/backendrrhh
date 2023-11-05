const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const Sucursal = require('./sucursal.model');

const CentroCosto = sequelize.define('CentroCosto', {
  codigo: {
    type: DataTypes.STRING(13),
    allowNull: false,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  sucursalesId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  empresasId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'centro_costo',
  timestamps: false,
  underscored: true, // Establecer a true para utilizar snake_case
});

// Definir la relación con la tabla Sucursal
CentroCosto.belongsTo(Sucursal, {
  foreignKey: 'sucursalesId',
  targetKey: 'id',
});

module.exports = CentroCosto;
