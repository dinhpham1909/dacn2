'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RoleUser extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            //RoleUser have many Role
            RoleUser.belongsTo(models.Role, {
                foreignKey: 'role_id',
                as: 'role',
            });
        }
    }
    RoleUser.init(
        {
            role_id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'RoleUser',
        },
    );
    return RoleUser;
};
