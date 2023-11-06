const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig'); // Asegúrate de importar la instancia de Sequelize
const TipoDia = require('./tipoDia.model'); // Asegúrate de importar la instancia de Sequelize

const PrecioConceptos = sequelize.define('PrecioConceptos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  tipoDiaId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cantidadDesde: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  cantidadHasta: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  horaDesde: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  horaHasta: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  precio: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  subSectorConceptoId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'precio_conceptos',
  timestamps: false,
  underscored: true
});

PrecioConceptos.belongsTo(TipoDia, { foreignKey: 'tipoDiaId', as: 'tipoDia' });

module.exports = PrecioConceptos;
