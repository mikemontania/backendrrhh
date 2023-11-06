require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./dbconfig');
const morgan = require('morgan');
const { json } = require('express/lib/response');

// Crear el servidor de express
const app = express();
//middlewares
app.use(morgan('dev'));
app.use(express.json());
// Configurar CORS
app.use(cors());


// Base de datos
const dbSetup = async () => {
    //crea conexion
    await dbConnection();
}
dbSetup();

//rutas 



app.use('/rrhh/auth', require('./src/routes/auth.routes'));
app.use('/rrhh/areapago', require('./src/routes/areaPago.routes'));
app.use('/rrhh/ausencia', require('./src/routes/ausencia.routes'));
app.use('/rrhh/barrio', require('./src/routes/barrio.routes'));
app.use('/rrhh/bono', require('./src/routes/bono.routes'));
app.use('/rrhh/carrera', require('./src/routes/carrera.routes'));
app.use('/rrhh/categoria', require('./src/routes/categoria.routes'));
app.use('/rrhh/centrocosto', require('./src/routes/centroCosto.routes'));
app.use('/rrhh/cierremensual', require('./src/routes/cierreMensual.routes'));
app.use('/rrhh/concepto', require('./src/routes/concepto.routes'));
app.use('/rrhh/conceptorrhh', require('./src/routes/conceptoRRHH.routes'));
app.use('/rrhh/cuentacc', require('./src/routes/CuentaCC.routes'));
app.use('/rrhh/debitocredito', require('./src/routes/debitoCredito.routes'));
app.use('/rrhh/desvinculacion', require('./src/routes/desvinculacionCab.routes'));
app.use('/rrhh/empleado', require('./src/routes/empleado.routes'));
app.use('/rrhh/empleadoconcepto', require('./src/routes/empleadoConcepto.routes'));
app.use('/rrhh/empleadoconceptoprecio', require('./src/routes/empleadoConceptoPrecio.routes'));
app.use('/rrhh/empleadocuota', require('./src/routes/empleadoCuota.routes'));
app.use('/rrhh/empleadofamilia', require('./src/routes/empleadoFamilia.routes'));
app.use('/rrhh/empresa', require('./src/routes/empresa.routes'));
app.use('/rrhh/estadocivil', require('./src/routes/estadoCivil.routes'));
app.use('/rrhh/feriado', require('./src/routes/feriado.routes'));
app.use('/rrhh/frecuenciapago', require('./src/routes/frecuenciaPago.routes'));
app.use('/rrhh/grupoconcepto', require('./src/routes/grupoConcepto.routes'));
app.use('/rrhh/honorarioprofesional', require('./src/routes/honorarioProfesional.routes'));
app.use('/rrhh/horario', require('./src/routes/horario.routes'));
app.use('/rrhh/liquidacion', require('./src/routes/liquidacion.routes'));
app.use('/rrhh/localidad', require('./src/routes/localidad.routes'));
app.use('/rrhh/motivoausencia', require('./src/routes/motivoAusencia.routes'));
app.use('/rrhh/motivodespido', require('./src/routes/motivoDespido.routes'));
app.use('/rrhh/nacionalidad', require('./src/routes/nacionalidad.routes'));
app.use('/rrhh/pais', require('./src/routes/pais.routes'));
app.use('/rrhh/parametro', require('./src/routes/parametro.routes'));
app.use('/rrhh/personahijo', require('./src/routes/personaHijo.routes'));
app.use('/rrhh/porcentajeips', require('./src/routes/porcentajeIps.routes'));
app.use('/rrhh/precioconcepto', require('./src/routes/precioConcepto.routes'));
app.use('/rrhh/rol', require('./src/routes/rol.routes'));
app.use('/rrhh/salariodetalle', require('./src/routes/salarioDetalle.routes'));
app.use('/rrhh/sector', require('./src/routes/sector.routes'));
app.use('/rrhh/seleccion', require('./src/routes/seleccion.routes'));
app.use('/rrhh/subsector', require('./src/routes/subSector.routes'));
app.use('/rrhh/sucursal', require('./src/routes/sucursal.routes'));
app.use('/rrhh/tipodia', require('./src/routes/tipoDia.routes'));
app.use('/rrhh/tipoempleado', require('./src/routes/tipoEmpleado.routes'));
app.use('/rrhh/tipofamilia', require('./src/routes/tipoFamilia.routes'));
app.use('/rrhh/trabajosemanal', require('./src/routes/trabajoSemanal.routes'));
app.use('/rrhh/turno', require('./src/routes/turno.routes'));
app.use('/rrhh/uploads', require('./src/routes/uploads.routes'));
app.use('/rrhh/usuario', require('./src/routes/usuario.routes'));
app.use('/rrhh/usuariocarga', require('./src/routes/usuarioCarga.routes'));
app.use('/rrhh/vacaciones', require('./src/routes/vacaciones.routes'));


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});
