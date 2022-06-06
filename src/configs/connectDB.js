const { Sequelize } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.SQL_DATABASE, process.env.SQL_USER, process.env.SQL_PASSWORD, {
    host: process.env.SQL_SERVER,
    dialect: process.env.SQL_DIALECT,
    logging: false,
    port: process.env.SQL_PORT,
    logging: false,
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
