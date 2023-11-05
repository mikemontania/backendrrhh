const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');

const TipoDia = require('./tipoDia.model');
const Empleado = require('./empleado.model');
const Concepto = require('./concepto.model');




const TrabajoSemanal = sequelize.define('TrabajoSemanal', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  cantidad: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  precio: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  montoTotal: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  fechaCarga: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaSemana: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  diaSemana: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  tipoDiaId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  empleadosId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  conceptosId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  sucursalesId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  empresasId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  liquidado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  fechaLiquidacion: {
    type: DataTypes.DATE,
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
  subSectorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  liquidacionId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  anulado: {
    type: DataTypes.STRING(2),
    allowNull: true,
  },
  centroCostoCodigo: {
    type: DataTypes.STRING(13),
    allowNull: true,
  },
  cantidadNormal: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  cantidadAdicional: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  cantidadAusencia: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  observacion: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  usuario: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  fechaModificacion: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  usuarioInsert: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
}, {
  tableName: 'trabajo_semanal',
  timestamps: false,
  underscored: true, // Convierte automáticamente a snake_case
});

TrabajoSemanal.belongsTo(TipoDia, {
  foreignKey: 'tipoDiaId',
  targetKey: 'id',
  as: 'tipoDia',
});

TrabajoSemanal.belongsTo(Empleado, {
  foreignKey: 'empleadosId',
  targetKey: 'id',
  as: 'empleado',
});

TrabajoSemanal.belongsTo(Concepto, {
  foreignKey: 'conceptosId',
  targetKey: 'id',
  as: 'concepto',
});
module.exports = TrabajoSemanal;
