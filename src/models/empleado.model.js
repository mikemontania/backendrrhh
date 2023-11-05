const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');


const Carrera = require('./carrera.model'); // Asegúrate de importar el modelo DesvinculacionCab
const EstadoCivil = require('./estadoCivil.model'); // Asegúrate de importar el modelo DesvinculacionCab
const Localidad = require('./localidad.model'); // Asegúrate de importar el modelo DesvinculacionCab
const Barrio = require('./barrio.model'); // Asegúrate de importar el modelo DesvinculacionCab
const Nacionalidad = require('./nacionalidad.model'); // Asegúrate de importar el modelo DesvinculacionCab
const Pais = require('./pais.model'); // Asegúrate de importar el modelo DesvinculacionCab
const Sector = require('./sector.model'); // Asegúrate de importar el modelo DesvinculacionCab
const SubSector = require('./subSector.model'); // Asegúrate de importar el modelo DesvinculacionCab
const CentroCosto = require('./centroCosto.model'); // Asegúrate de importar el modelo DesvinculacionCab
const AreaPago = require('./areaPago.model'); // Asegúrate de importar el modelo DesvinculacionCab
const FrecuenciaPago = require('./frecuenciaPago.model'); // Asegúrate de importar el modelo DesvinculacionCab
const Seleccion = require('./seleccion.model'); // Asegúrate de importar el modelo DesvinculacionCab
const TipoEmpleado = require('./tipoEmpleado.model'); // Asegúrate de importar el modelo DesvinculacionCab
const PorcentajeIps = require('./porcentajeIps.model'); // Asegúrate de importar el modelo DesvinculacionCab
const Categoria = require('./categoria.model'); // Asegúrate de importar el modelo DesvinculacionCab


const Empleado = sequelize.define('Empleado', {
  legajo: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  nroTarjeta: {
    type: DataTypes.STRING(8),
    allowNull: true,
  },
  fechaIngreso: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fechaSalida: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  salarioActual: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  imagen: {
    type: DataTypes.STRING(80),
    allowNull: true,
  },
  path: {
    type: DataTypes.STRING(80),
    allowNull: true,
  },
  observacion: {
    type: DataTypes.STRING(300),
    allowNull: true,
  },
  ci: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  fechaNacimiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  direccion: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  telefono: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  celular: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  telefonoFamiliar: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  carreraId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  especializacion: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  maestria: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  doctorado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  postgrado: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  estudios: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  ctaBanco: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  controlarHorario: {
    type: DataTypes.STRING(2),
    allowNull: true,
  },
  ipsBase: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  semanalFijo: {
    type: DataTypes.STRING(2),
    allowNull: true,
  },
  centroCostoCodigo: {
    type: DataTypes.STRING(13),
    allowNull: true,
  },
  tipoIps: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  anticipo: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: true,
  },
  familiaresEmpresa: {
    type: DataTypes.STRING(2),
    allowNull: true,
  },
  escolarCompleta: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  escolarIncompleta: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  mediaCompleta: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  mediaIncompleta: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  tecnicaturaCompleta: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  tecnicaturaIncompleta: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  universitarioCompleto: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  universitarioIncompleto: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
}, {
  tableName: 'empleados',
  timestamps: false,
  underscored: true, // Establecer a true para utilizar snake_case
});

// Definir las relaciones con las tablas relacionadas
// Asegúrate de tener los modelos de las tablas relacionadas definidos


Empleado.belongsTo(Sector, {
  foreignKey: 'sectorId',
  targetKey: 'id',
});

 

Empleado.belongsTo(Categoria, {
  foreignKey: 'categoriaId',
  targetKey: 'id',
});

Empleado.belongsTo(EstadoCivil, {
  foreignKey: 'estadoCivilId',
  targetKey: 'id',
});

Empleado.belongsTo(Localidad, {
  foreignKey: 'localidadId',
  targetKey: 'id',
});

Empleado.belongsTo(Barrio, {
  foreignKey: 'barrioId',
  targetKey: 'id',
});

Empleado.belongsTo(Nacionalidad, {
  foreignKey: 'nacionalidadId',
  targetKey: 'id',
});

Empleado.belongsTo(Pais, {
  foreignKey: 'paisId',
  targetKey: 'id',
});

Empleado.belongsTo(Sector, {
  foreignKey: 'sectorId',
  targetKey: 'id',
});

Empleado.belongsTo(SubSector, {
  foreignKey: 'subSectorId',
  targetKey: 'id',
});

Empleado.belongsTo(CentroCosto, {
  foreignKey: 'centroCostoCodigo',
  targetKey: 'codigo',
});

Empleado.belongsTo(AreaPago, {
  foreignKey: 'areaPagoId',
  targetKey: 'id',
});

Empleado.belongsTo(FrecuenciaPago, {
  foreignKey: 'frecuenciaPagoId',
  targetKey: 'id',
});

Empleado.belongsTo(Seleccion, {
  foreignKey: 'seleccionId',
  targetKey: 'id',
});

Empleado.belongsTo(TipoEmpleado, {
  foreignKey: 'tipoEmpleadoId',
  targetKey: 'id',
});

Empleado.belongsTo(PorcentajeIps, {
  foreignKey: 'porcentajeIpsId',
  targetKey: 'id',
});


// Definir más relaciones según las tablas relacionadas

module.exports = Empleado;
