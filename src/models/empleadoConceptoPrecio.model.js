const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const EmpleadoConceptos = require('./empleadoConcepto.model'); // Asegúrate de importar el modelo EmpleadoConceptos
const TipoDia = require('./tipoDia.model'); // Asegúrate de importar el modelo TipoDia

const EmpleadoConceptosPrecio = sequelize.define('EmpleadoConceptosPrecio', {
  
  empleadoConceptosId: {
    type: DataTypes.INTEGER,
  },
  precio: {
    type: DataTypes.DECIMAL(18, 2),
  },
  horaDesde: {
    type: DataTypes.TIME,
  },
  horaHasta: {
    type: DataTypes.TIME,
  },
  cantidadDesde: {
    type: DataTypes.DECIMAL(18, 2),
  },
  cantidadHasta: {
    type: DataTypes.DECIMAL(18, 2),
  },
  tipoDiaId: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'empleado_conceptos_precio',
  timestamps: false,
});

// Definir la relación con la tabla empleadoConceptos
EmpleadoConceptosPrecio.belongsTo(EmpleadoConceptos, {
  foreignKey: 'empleadoConceptosId',
  targetKey: 'id',
  as: 'empleadoConceptos',
});

// Definir la relación con la tabla tipoDia
EmpleadoConceptosPrecio.belongsTo(TipoDia, {
  foreignKey: 'tipoDiaId',
  targetKey: 'id',
  as: 'tipoDia',
});

module.exports = EmpleadoConceptosPrecio;
