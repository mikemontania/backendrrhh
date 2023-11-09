const { DataTypes } = require('sequelize');
const { sequelize } = require('../../dbconfig');
const Horario = require('./horario.model');
const Carrera = require('./carrera.model');
const EstadoCivil = require('./estadoCivil.model');
const Localidad = require('./localidad.model');
const Barrio = require('./barrio.model');
const Nacionalidad = require('./nacionalidad.model');
const Pais = require('./pais.model');
const Sector = require('./sector.model');
const SubSector = require('./subSector.model');
const CentroCosto = require('./centroCosto.model');
const FrecuenciaPago = require('./frecuenciaPago.model');
const Seleccion = require('./seleccion.model');
const TipoEmpleado = require('./tipoEmpleado.model');
const PorcentajeIps = require('./porcentajeIps.model');
const Categoria = require('./categoria.model');
const Empresa = require('./empresa.model');
const Sucursal = require('./sucursal.model');
const Turno = require('./turno.model');

const Empleado = sequelize.define('Empleado', {
  legajo: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  nroTarjeta: {
    type: DataTypes.STRING(8),
    allowNull: true,
  },
  nombre: {
    type: DataTypes.STRING(80),
    allowNull: true,
  },


  bonificacion: {
    type: DataTypes.STRING(2),
    allowNull: true,
  },
  lugarNacimiento: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  interno: {
    type: DataTypes.STRING(20),
  },
  corporativo: {
    type: DataTypes.STRING(20),
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
  fechaIngreso: {
    type: DataTypes.DATE,
    allowNull: true,

  },
  fechaSalida: {
    type: DataTypes.DATE,
    allowNull: true,

  },
  ingresoIps: {
    type: DataTypes.DATE,
    allowNull: true,

  },
  salidaIps: {
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
  activo: {
    type: DataTypes.STRING(2),
    allowNull: true,
  },
  sexo: {
    type: DataTypes.STRING(2),
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
  empresasId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  sucursalesId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  horariosId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  carreraId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  sectorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  categoriaId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  estadoCivilId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  localidadId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  barrioId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  nacionalidadesId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  paisesId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  subSectorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  centroCostoCodigo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  frecuenciaPagoId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  via_seleccion: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  tipoEmpleadoId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  turnosId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  porcentajeIpsId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
}, {
  tableName: 'empleados',
  timestamps: false,
  underscored: true, // Establecer a true para utilizar snake_case
});

// Definir las relaciones con las tablas relacionadas 
Empleado.belongsTo(Empresa, {
  foreignKey: 'empresasId',
  targetKey: 'id',
  as: 'empresa',
});

Empleado.belongsTo(Sucursal, {
  foreignKey: 'sucursalesId',
  targetKey: 'id',
  as: 'sucursal',
});
Empleado.belongsTo(Turno, {
  foreignKey: 'turnosId',
  targetKey: 'id',
  as: 'turno',
});

Empleado.belongsTo(Horario, {
  foreignKey: 'horariosId',
  targetKey: 'id',
  as: 'horario',
});

Empleado.belongsTo(Carrera, {
  foreignKey: 'carreraId',
  targetKey: 'id',
  as: 'carrera',
});


Empleado.belongsTo(Categoria, {
  foreignKey: 'categoriaId',
  targetKey: 'id',
  as: 'categoria',
});

Empleado.belongsTo(EstadoCivil, {
  foreignKey: 'estadoCivilId',
  targetKey: 'id',
  as: 'estadoCivil',
});

Empleado.belongsTo(Localidad, {
  foreignKey: 'localidadId',
  targetKey: 'id',
  as: 'localidad',
});

Empleado.belongsTo(Barrio, {
  foreignKey: 'barrioId',
  targetKey: 'id',
  as: 'barrio',
});

Empleado.belongsTo(Nacionalidad, {
  foreignKey: 'nacionalidadesId',
  targetKey: 'id',
  as: 'nacionalidad',
});

Empleado.belongsTo(Pais, {
  foreignKey: 'paisesId',
  targetKey: 'id',
  as: 'pais',
});

Empleado.belongsTo(Sector, {
  foreignKey: 'sectorId',
  targetKey: 'id',
  as: 'sector',
});

Empleado.belongsTo(SubSector, {
  foreignKey: 'subSectorId',
  targetKey: 'id',
  as: 'subSector',
});

Empleado.belongsTo(CentroCosto, {
  foreignKey: 'centroCostoCodigo',
  targetKey: 'codigo',
  as: 'centroCosto',
});

Empleado.belongsTo(FrecuenciaPago, {
  foreignKey: 'frecuenciaPagoId',
  targetKey: 'id',
  as: 'frecuenciaPago',
});

Empleado.belongsTo(Seleccion, {
  foreignKey: 'via_seleccion',
  targetKey: 'id',
  as: 'seleccion',
});

Empleado.belongsTo(TipoEmpleado, {
  foreignKey: 'tipoEmpleadoId',
  targetKey: 'id',
  as: 'tipoEmpleado',
});

Empleado.belongsTo(PorcentajeIps, {
  foreignKey: 'porcentajeIpsId',
  targetKey: 'id',
  as: 'porcentajeIps',
});


// Definir más relaciones según las tablas relacionadas

module.exports = Empleado;
