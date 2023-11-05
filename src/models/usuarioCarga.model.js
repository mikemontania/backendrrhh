const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const Usuario = require('./usuario.model');
const Sector = require('./sector.model');
const SubSector = require('./subSector.model');

const UsuariosCarga = sequelize.define('UsuariosCarga', {
  // No se necesita definir columnas específicas ya que se refieren a claves foráneas
}, {
  tableName: 'usuarios_carga',
  timestamps: false,
  underscored:true
});

// Definir las relaciones con las tablas de usuarios, sector y subSector
UsuariosCarga.belongsTo(Usuario, {
  foreignKey: 'usuariosId',
  targetKey: 'id',
  as: 'usuario', // Alias de la relación
});

UsuariosCarga.belongsTo(Sector, {
  foreignKey: 'sectorId',
  targetKey: 'id',
  as: 'sector', // Alias de la relación
});

UsuariosCarga.belongsTo(SubSector, {
  foreignKey: 'subSectorId',
  targetKey: 'id',
  as: 'subSector', // Alias de la relación
});

module.exports = UsuariosCarga;
