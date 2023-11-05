const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const Localidad = require('./localidad.model');
const Barrio = sequelize.define('Barrio', {
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'barrio',
  timestamps: false,
  underscored: true, // Establecer a true para utilizar snake_case

});

// Definir la relación con la tabla de localidad
Barrio.belongsTo(Localidad, {
  foreignKey: 'localidadId',
  targetKey: 'id',
});

module.exports = Barrio;
