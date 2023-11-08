const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const SubSector = require('./subSector.model');
const Turno = require('./turno.model');
const moment = require('moment');

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
  // Definir el campo virtual para la concatenación de las horas
  concat: {
    type: DataTypes.VIRTUAL,
    get() {
      const tolMin = this.getDataValue('tolMin');
      const horaDesde = this.getDataValue('horaDesde');
      const horaHasta = this.getDataValue('horaHasta');
      const sabEntrada = this.getDataValue('sabEntrada');
      const sabSalida = this.getDataValue('sabSalida');
      const domEntrada = this.getDataValue('domEntrada');
      const domSalida = this.getDataValue('domSalida');
      const formattedHoras = [];
      formattedHoras.push(`tol:${tolMin}min`);
      if (horaDesde && horaHasta) {
        formattedHoras.push(`Luns-Vrs ${moment(horaDesde).format('HH:mm')} - ${moment(horaHasta).format('HH:mm')}hs`);
      }
      if (sabEntrada && sabSalida) {
        formattedHoras.push(`Sáb: ${moment(sabEntrada).format('HH:mm')} - ${moment(sabSalida).format('HH:mm')}hs`);
      }
      if (domEntrada && domSalida) {
        formattedHoras.push(`Sáb: ${moment(domEntrada).format('HH:mm')} - ${moment(domSalida).format('HH:mm')}hs`)
      }
      return formattedHoras.join(' ');
    },
  },
  subSectorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  turnosId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'horarios',
  timestamps: false,
  underscored: true,
});

Horario.belongsTo(SubSector, {
  foreignKey: 'subSectorId',
  targetKey: 'id',
  as: 'subSector',
});

Horario.belongsTo(Turno, {
  foreignKey: 'turnosId',
  targetKey: 'id',
  as: 'turno',
});

module.exports = Horario;
