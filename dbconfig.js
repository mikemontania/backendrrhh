const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_CNN, {
    logging: false, //default true
    dialectOptions: {
        encrypt: false,
        options: {
            useUTC: false, // for reading from database

        },
    },
    // timezone: process.env.USER_TIMEZONE,
    pool: {
        max: 5,
        idle: 30000,
        require: 60000,
    }
});

const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync().then(() => {
            // Enable query logging
            sequelize.options.logging = console.log;
        });


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