const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const ConceptoRRHH = require('./conceptoRRHH.model'); // Asegúrate de importar el modelo ConceptosRRHH
const DesvinculacionCab = require('./desvinculacionCab.model'); // Asegúrate de importar el modelo DesvinculacionCab

const DesvinculacionDet = sequelize.define('DesvinculacionDet', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  desvinculacionCabId: {
    type: DataTypes.INTEGER,
  },
  conceptosRrhhId: {
    type: DataTypes.INTEGER,
  },
  cantidad: {
    type: DataTypes.DECIMAL(18, 2),
  },
  montoTotal: {
    type: DataTypes.DECIMAL(18, 2),
  },
}, {
  tableName: 'desvinculacion_det',
  timestamps: false,
  underscored: true, // Establecer a true para utilizar snake_case
});

// Definir la relación con la tabla desvinculacion_cab
DesvinculacionDet.belongsTo(DesvinculacionCab, {
  foreignKey: 'desvinculacionCabId',
  targetKey: 'id',
  as: 'desvinculacionCab',
});

// Definir la relación con la tabla conceptos_rrhh
DesvinculacionDet.belongsTo(ConceptoRRHH, {
  foreignKey: 'conceptosRrhhId',
  targetKey: 'id',
  as: 'conceptoRRHH',
});

module.exports = DesvinculacionDet;
