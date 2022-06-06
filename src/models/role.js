'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            ///Role vs RoleUser
            Role.hasMany(models.RoleUser, {
                foreignKey: 'role_id',
                as: 'roleUser',
            });
            //Role vs User
            Role.belongsToMany(models.User, {
                through: 'RoleUser',
                foreignKey: 'role_id',
                as: 'users',
            });
            //Role vs Permission
            Role.belongsToMany(models.Permission, {
                through: 'PermissionRole',
                foreignKey: 'role_id',
                as: 'permissions',
                unique: false,
            });
        }
    }
    Role.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'Role',
        },
    );
    return Role;
};
