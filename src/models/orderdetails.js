'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class OrderDetails extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            //OrderDetails vs Order relationships
            OrderDetails.belongsTo(models.Order, {
                foreignKey: 'order_id',
                as: 'order',
            });

            //OrderDetails vs Product relationships
            OrderDetails.belongsTo(models.Product, {
                foreignKey: 'product_id',
                as: 'product',
            });
        }
    }
    OrderDetails.init(
        {
            order_id: DataTypes.INTEGER,
            product_id: DataTypes.INTEGER,
            price: DataTypes.DOUBLE,
            quantity: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'OrderDetails',
        },
    );
    return OrderDetails;
};
