const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const SubSector = require('./subSector.model'); // Asegúrate de importar el modelo SubSector
const Turno = require('./turno.model'); // Asegúrate de importar el modelo Turno

const Horario = sequelize.define('Horario', {
  horaDesde: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  horaHasta: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  tolerancia: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  sabEntrada: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  sabSalida: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  domEntrada: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  domSalida: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  rango: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  tolMin: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'horarios',
  timestamps: false,
  underscored: true, // Convierte automáticamente a snake_case

});

// Definir las relaciones con las tablas de SubSector y Turno
Horario.belongsTo(SubSector, {
  foreignKey: 'subSectorId',
  targetKey: 'id',
  as: 'subSector',
});

Horario.belongsTo(Turno, {
  foreignKey: 'turnoId',
  targetKey: 'id',
  as: 'turno',
});

module.exports = Horario;
