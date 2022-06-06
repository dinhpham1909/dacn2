'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            //User has Many Role User
            // User.hasMany(models.RoleUser, {
            //     foreignKey: 'user_id',
            //     as: 'roleUser',
            // });
            // //User vs Role
            User.belongsToMany(models.Role, {
                through: 'RoleUser',
                foreignKey: 'user_id',
                as: 'roles',
            });
            //User has Permission throung PermissonRole
        }
    }
    User.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            address: DataTypes.STRING,
            image: DataTypes.STRING,
            password: DataTypes.STRING,
            phone: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'User',
        },
    );
    return User;
};
