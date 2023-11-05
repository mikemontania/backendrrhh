require ('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./dbconfig');
const morgan = require('morgan');
const { json } = require('express/lib/response');

// Crear el servidor de express
const app = express(); 
//middlewares
app.use( morgan('dev'));
app.use( express.json());
// Configurar CORS
app.use(cors()); 


// Base de datos
const dbSetup = async ()=>{
    //crea conexion
    await dbConnection(); 
}
dbSetup();

//rutas 
app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT );
});
