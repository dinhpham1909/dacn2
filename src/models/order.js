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
            //Order vs OrderDetails relationships
            Order.hasMany(models.OrderDetails, {
                foreignKey: 'order_id',
                as: 'orderdetails',
            });
            //Order vs User relationships
            Order.belongsTo(models.User, {
                foreignKey: 'id_user',
                as: 'user',
            });
        }
    }
    Order.init(
        {
            id_user: DataTypes.INTEGER,
            price: DataTypes.DOUBLE,
            status: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Order',
        },
    );
    return Order;
};
