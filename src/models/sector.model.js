const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const  Sucursal  = require('./sucursal.model');
const  Empresa  = require('./empresa.model');

const Sector = sequelize.define('Sector', {
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  es_comercial: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'sector',
  timestamps: false,
  underscored:true
});

// Definir las relaciones con las tablas de sucursales y empresas
Sector.belongsTo(Sucursal, {
  foreignKey: 'sucursalesId',
  targetKey: 'id',
});

Sector.belongsTo(Empresa, {
  foreignKey: 'empresasId',
  targetKey: 'id',
});

module.exports = Sector;
