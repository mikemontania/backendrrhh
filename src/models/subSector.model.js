const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const  Sector  = require('./sector.model');
const SubSector = sequelize.define('SubSector', {
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'sub_sector',
  timestamps: false,
  underscored:true
});

// Definir la relación con la tabla de sector
SubSector.belongsTo(Sector, {
  foreignKey: 'sectorId',
  targetKey: 'id',
});

module.exports = SubSector;
