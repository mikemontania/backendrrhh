const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig'); // Asegúrate de importar la instancia de Sequelize

const TipoFamilia = sequelize.define('TipoFamilia', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: true,
    collate: 'Modern_Spanish_CI_AS',
  },
}, {
  tableName: 'tipo_familia',
  timestamps: false,
});

module.exports = TipoFamilia;
