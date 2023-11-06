const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const Empresa = require('./empresa.model');
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
  empresaId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  rolesId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  sucursalesId: {
    type: DataTypes.INTEGER,
    allowNull: true,
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
  saltvalue: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true, // Puedes ajustar esto según tus necesidades
  }
}, {
  tableName: 'usuarios',
  timestamps: false,
  underscored: true,
  // Esto convierte los nombres de modelos de pascalCase a snake_case
  freezeTableName: true,
});

// Definir las relaciones con las tablas de roles, sucursales y empresas
Usuario.belongsTo(Rol, {
  foreignKey: 'rolesId', as: 'role'
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
