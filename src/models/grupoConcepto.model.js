const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig'); // Asegúrate de importar la instancia de Sequelize
const GrupoConcepto = sequelize.define('GrupoConcepto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING, // Puedes ajustar el tipo de datos según tus necesidades
  },
}, {
  tableName: 'grupo_concepto', // Nombre de la tabla en la base de datos
  timestamps: false, // Esto desactiva la gestión automática de campos de fecha
});

module.exports = GrupoConcepto;
