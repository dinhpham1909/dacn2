'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            id_user: {
                type: Sequelize.INTEGER,
            },
            id_orderDetails: {
                type: Sequelize.INTEGER,
            },
            price: {
                type: Sequelize.DOUBLE,
            },
            status: {
                type: Sequelize.INTEGER,
            },
            id_userBuy: {
                type: Sequelize.INTEGER,
            },
            id_CN: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Orders');
    },
};
