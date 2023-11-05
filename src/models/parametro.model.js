const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const Empresa = require('./empresa.model');
const Parametro = sequelize.define('Parametro', {
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  valor: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  operacion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'parametros',
  timestamps: false,
  underscored:true
});

// Definir la relación con la tabla de empresas
Parametro.belongsTo(Empresa, {
  foreignKey: 'empresasId',
  targetKey: 'id',
});

module.exports = Parametro;
