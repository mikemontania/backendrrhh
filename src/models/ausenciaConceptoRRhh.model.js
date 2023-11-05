const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const ConceptosRRHH = require('./conceptoRRHH.model');
const MotivosAusencia = require('./motivoAusencia.model');

const AusenciaConceptosRRHH = sequelize.define('AusenciaConceptosRRHH', {
  motivoId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  conceptosDebitoId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  conceptosCreditoId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'ausencia_conceptos_rrhh',
  timestamps: false,
  underscored: true, // Establecer a true para utilizar snake_case
});

// Definir las relaciones con las tablas ConceptosRRHH y MotivosAusencias
AusenciaConceptosRRHH.belongsTo(MotivosAusencia, {
  foreignKey: 'motivoId', // snake_case
  targetKey: 'id',
});

AusenciaConceptosRRHH.belongsTo(ConceptosRRHH, {
  foreignKey: 'conceptosDebitoId', // snake_case
  targetKey: 'id',
});

AusenciaConceptosRRHH.belongsTo(ConceptosRRHH, {
  foreignKey: 'conceptosCreditoId', // snake_case
  targetKey: 'id',
});

module.exports = AusenciaConceptosRRHH;
