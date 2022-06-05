const { Sequelize } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.SQL_DATABASE, process.env.SQL_USER, process.env.SQL_PASSWORD, {
    host: process.env.SQL_SERVER,
    dialect: 'mssql',
    port: 1433,
    logging: false,
    encrypt: false,
    encrypt: false,
    trustServerCertificate: true,
});
let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kêt nối thành công với Database');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
module.exports = connectDB;
