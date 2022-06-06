'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Permission extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            //Permission cvs PermissionCategory
            Permission.belongsTo(models.PermissionCategory, {
                foreignKey: 'permission_category_id',
                as: 'permission_category',
            });
            //Permission vs PermissionRole
            Permission.belongsToMany(models.Role, {
                through: 'PermissionRole',
                foreignKey: 'permission_id',
                as: 'roles',
            });
        }
    }
    Permission.init(
        {
            name: DataTypes.STRING,
            permission_category_id: DataTypes.INTEGER,
            value: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Permission',
        },
    );
    return Permission;
};
