const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const Empresa = require('./empresa.model');

const Turno = sequelize.define('Turno', {
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tipo: {
    type: DataTypes.STRING(2),
    collate: 'Modern_Spanish_CI_AS', 
  },
}, {
  tableName: 'turnos',
  timestamps: false,
  underscored:true
});
Turno.belongsTo(Empresa, {
  foreignKey: 'empresasId',
  targetKey: 'id',
});

module.exports = Turno;
 