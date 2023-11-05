const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const ConceptoRRHH = require('./conceptoRRHH.model'); // Asegúrate de importar el modelo ConceptosRRHH

const Conceptos = sequelize.define('Conceptos', {
  descripcion: {
    type: DataTypes.STRING(80),
    collate: 'Modern_Spanish_CI_AS',
  },
  tipoConcepto: {
    type: DataTypes.INTEGER,
  },
  conceptosrrhhId: {
    type: DataTypes.INTEGER,
  },
  mostrar: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'conceptos',
  timestamps: false,
  underscored: true, // Establecer a true para utilizar snake_case
});

// Definir la relación con la tabla de conceptos de RRHH (conceptos_rrhh)
Conceptos.belongsTo(ConceptoRRHH, {
  foreignKey: 'conceptosrrhhId', // Nombre en camelCase
  targetKey: 'id',
  as: 'conceptosRRHH',
});

module.exports = Conceptos;
