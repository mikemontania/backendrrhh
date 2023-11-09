const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_CNN, {
    logging: false, //default true
    dialectOptions: {
        encrypt: false,
        options: {
            useUTC: false, // para lectura desde la base de datos
        },
    },
    // timezone: process.env.USER_TIMEZONE,
    pool: {
        max: 5,
        idle: 30000,
        require: 60000,
    },
    define: {
        timestamps: false, // Si no estás utilizando timestamps en tus modelos
    },
    timezone: process.env.USER_TIMEZONE,
});

const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync(); // Puedes usar `sync` sin el `then`, ya que es asíncrono

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