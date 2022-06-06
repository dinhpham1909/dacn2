import db from '../models/index';

//create PermissionRole using promise and sequelize
let createPermissionRole = async (permissionRole) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (permissionRole) {
                let newPermissionRole = await db.PermissionRole.create({
                    permissionId: permissionRole.permissionId,
                    roleId: permissionRole.roleId,
                });
                resolve(newPermissionRole);
            }
            reject('permissionRole is required');
        } catch (err) {
            reject(err);
        }
    });
};
let deletePermissionRole = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let deletedPermissionRole = await db.PermissionRole.destroy({
                    where: {
                        id: id,
                    },
                });
                resolve(deletedPermissionRole);
            }
            reject('ID is required');
        } catch (error) {
            reject(error);
        }
    });
};

//delete PermissionRole using promise and Sequelize where id_permission
let deletePermissionRoleByIdPermission = async (idPermission) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (idPermission) {
                let deletedPermissionRole = await db.PermissionRole.destroy({
                    where: {
                        permissionId: idPermission,
                    },
                });
                resolve(deletedPermissionRole);
            }
            reject('ID is required');
        } catch (error) {
            reject(error);
        }
    });
};

///delete PermissionRole using promise and Sequelize where id_role
let deletePermissionRoleByIdRole = async (idRole) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (idRole) {
                let deletedPermissionRole = await db.PermissionRole.destroy({
                    where: {
                        roleId: idRole,
                    },
                });
                resolve(deletedPermissionRole);
            }
            reject('ID is required');
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {
    createPermissionRole,
    deletePermissionRole,
    deletePermissionRoleByIdPermission,
    deletePermissionRoleByIdRole,
};
