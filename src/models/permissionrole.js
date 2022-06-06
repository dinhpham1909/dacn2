'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PermissionRole extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            ///Role vs PermissionRole
            // PermissionRole.belongsTo(models.Permission, {
            //     foreignKey: 'permission_id',
            //     as: 'permission',
            // });
        }
    }
    PermissionRole.init(
        {
            role_id: DataTypes.INTEGER,
            permission_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'PermissionRole',
        },
    );
    return PermissionRole;
};
