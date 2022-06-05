require('dotenv').config();
module.exports = {
    development: {
        username: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE,
        host: process.env.SQL_SERVER,
        dialect: 'mssql',
        port: 1433,
        logging: false,
    },
    test: {
        username: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE,
        host: process.env.SQL_SERVER,
        dialect: 'mssql',
        port: 1433,
        logging: false,
    },
    production: {
        username: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE,
        host: process.env.SQL_SERVER,
        dialect: 'mssql',
        port: 1433,
        logging: false,
    },
};
