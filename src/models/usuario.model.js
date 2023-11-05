const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const Empresa= require('./empresa.model');
const Sucursal = require('./sucursal.model');
const Rol = require('./rol.model');
const Usuario = sequelize.define('Usuario', {
  usuario: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rol: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  admin: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'N',
  },
  intentos: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  bloqueado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  saltValue: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true, // Puedes ajustar esto según tus necesidades
  },
  pass: {  // Nueva columna
    type: DataTypes.STRING, 
  },
}, {
  tableName: 'usuarios',
  timestamps: false,
});

// Definir las relaciones con las tablas de roles, sucursales y empresas
Usuario.belongsTo(Rol, {
  foreignKey: 'rolesId',
  targetKey: 'id',
});

Usuario.belongsTo(Sucursal, {
  foreignKey: 'sucursalesId',
  targetKey: 'id',
});

Usuario.belongsTo(Empresa, {
  foreignKey: 'empresaId',
  targetKey: 'id',
});

module.exports = Usuario;
