const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig'); // Asegúrate de importar la instancia de Sequelize
const MotivosDespidos = sequelize.define('MotivosDespidos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING(100), // Usé STRING en lugar de VARCHAR
    allowNull: true,
    collate: 'Modern_Spanish_CI_AS',
  },
}, {
  tableName: 'motivos_despidos', // Nombre de la tabla en la base de datos
  timestamps: false, // Esto desactiva la gestión automática de campos de fecha
});

module.exports = MotivosDespidos;
