const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig'); // Asegúrate de importar la instancia de Sequelize

const TipoEmpleado = sequelize.define('TipoEmpleado', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING(80),
    allowNull: true,
    collate: 'Modern_Spanish_CI_AS',
  },
}, {
  tableName: 'tipo_empleado',
  timestamps: false,
});

module.exports = TipoEmpleado;
