const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig'); // Asegúrate de importar la instancia de Sequelize

const PorcentajeIps = sequelize.define('PorcentajeIps', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: false,
    collate: 'Modern_Spanish_CI_AS',
  },
  porcentaje: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
}, {
  tableName: 'porcentaje_ips',
  timestamps: false,
});

module.exports = PorcentajeIps;
