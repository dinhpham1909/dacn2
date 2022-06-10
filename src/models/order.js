'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Order.hasMany(models.OrderDetails, {
                foreignKey: 'order_id',
                as: 'orderdetails',
            });
            //Order vs User relationships
            Order.belongsTo(models.User, {
                foreignKey: 'id_user',
                as: 'user',
            });
            Order.belongsTo(models.ChiNhanh, {
                foreignKey: 'id_CN',
                as: 'chinhanh',
            });
            Order.belongsTo(models.User, {
                foreignKey: 'id_userBuy',
                as: 'userbuy',
            });
        }
    }
    Order.init(
        {
            id_user: DataTypes.INTEGER,
            id_orderDetails: DataTypes.INTEGER,
            price: DataTypes.DOUBLE,
            status: DataTypes.INTEGER,
            id_userBuy: DataTypes.INTEGER,
            id_CN: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Order',
        },
    );
    return Order;
};
