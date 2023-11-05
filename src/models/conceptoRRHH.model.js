const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const GrupoConcepto = require('./grupoConcepto.model'); // Asegúrate de importar el modelo GrupoConcepto
 
const ConceptosRRHH = sequelize.define('ConceptosRRHH', {
  descripcion: {
    type: DataTypes.STRING(100),
    collate: 'Modern_Spanish_CI_AS',
  },
  tipoOperacion: {
    type: DataTypes.INTEGER,
  },
  mostrar: {
    type: DataTypes.INTEGER,
  },
  esPrestamo: {
    type: DataTypes.STRING(2),
    collate: 'Modern_Spanish_CI_AS',
    defaultValue: 'N',
  },
  esAjuste: {
    type: DataTypes.STRING(2),
    collate: 'Modern_Spanish_CI_AS',
    defaultValue: 'N',
  },
  afectaIps: {
    type: DataTypes.STRING(2),
    collate: 'Modern_Spanish_CI_AS',
    defaultValue: 'N',
  },
  cuentaCCCodigo: {
    type: DataTypes.STRING(13),
    collate: 'Modern_Spanish_CI_AS',
  },
  debeHaber: {
    type: DataTypes.STRING(2),
    collate: 'Modern_Spanish_CI_AS',
  },
  esAnticipo: {
    type: DataTypes.STRING(2),
    collate: 'Modern_Spanish_CI_AS',
    defaultValue: 'N',
  },
  grupoId: {
    type: DataTypes.INTEGER,
  },
  conceptoValor: {
    type: DataTypes.DECIMAL(18, 2),
  },
  orden: {
    type: DataTypes.INTEGER,
  },
  aguinaldo: {
    type: DataTypes.STRING(2),
    collate: 'Modern_Spanish_CI_AS',
    defaultValue: 'N',
  },
}, {
  tableName: 'conceptos_rrhh',
  timestamps: false,
  underscored: true, // Establecer a true para utilizar snake_case
});

// Definir la relación con la tabla GrupoConcepto
ConceptosRRHH.belongsTo(GrupoConcepto, {
  foreignKey: 'grupoId', // Nombre en camelCase
  targetKey: 'id',
  as: 'grupoConcepto',
});

module.exports = ConceptosRRHH;
