const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_CNN, {
    logging: true, // Habilita el registro de consultas (por defecto, true)
    pool: {
        max: 5,       // Número máximo de conexiones en el grupo
        idle: 30000,  // Tiempo de inactividad antes de que la conexión se cierre
        require: 60000 // Tiempo máximo para que una conexión se adquiera
    }
});

const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        
       // if (process.env.DB_INIT == 'true') {
            // Destruye y vuelve a crear la base de datos
       //     await sequelize.sync({ force: true });
       // } else {
            // Solo crea la base de datos si no existe
        ///    await sequelize.sync();
        //}
        
        console.log('Conectado a la BD: %j', process.env.DB_CNN);
    } catch (error) {
        console.error(error);
        throw new Error('Error al conectarse a la BD');
    }
}

module.exports = {
    sequelize,
    dbConnection
}
