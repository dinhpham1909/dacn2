require('dotenv').config();

module.exports = {
    development: {
        username: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE,
        host: process.env.SQL_SERVER,
        dialect: process.env.SQL_DIALECT,
        port: process.env.SQL_PORT,
        logging: false,
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mssql',
    },
    production: {
        username: 'root',
        password: null,
        database: 'database_production',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
};
