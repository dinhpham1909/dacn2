import db from '../models/index';
//create new Permissions using promise and sequelize
let createPermission = async (permission) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (permission) {
                let newPermission = await db.Permission.create({
                    id: permission.id,
                    name: permission.name,
                    permission_category_id: permission.permission_category_id,
                    value: permission.value,
                });
                resolve(newPermission);
            }
            reject('permission is required');
        } catch (err) {
            reject(err);
        }
    });
};
//Delete permission using promise and Sequelize where id
let deletePermission = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let deletedPermission = await db.Permission.destroy({
                    where: {
                        id: id,
                    },
                });
                resolve(deletedPermission);
            }
            reject('ID is required');
        } catch (error) {
            reject(error);
        }
    });
};
//update permissions using promise and Sequelize
let updatePermission = async (permission) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (permission) {
                //using findOne where id and save data
                let updatedPermission = await db.Permission.findOne({
                    where: {
                        id: permission.id,
                    },
                });
                ///check attributes not null after asign value
                if (permission.name) {
                    updatedPermission.name = permission.name;
                }
                if (permission.value) {
                    updatedPermission.value = permission.value;
                }
                if (permission.description) {
                    updatedPermission.description = permission.description;
                }
                updatedPermission.save();
            } else {
                reject('permission is required');
            }
        } catch (error) {
            reject(error);
        }
    });
};
//get all permissions using promise and Sequelize

let getAllPermissions = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let permissions = await db.Permission.findAll({
                attributes: ['name', 'value'],
                include: [
                    {
                        model: db.PermissionCategory,
                        attributes: ['name'],
                        as: 'permission_category',
                    },
                ],
            });
            resolve(permissions);
        } catch (error) {
            reject(error);
        }
    });
};
//get permissions using promise and Sequelize where id

let getPermissonById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let permissions = await db.Permission.findAll({
                attributes: ['name', 'value'],
                include: [
                    {
                        model: db.PermissionCategory,
                        attributes: ['name'],
                        as: 'permission_category',
                    },
                ],
            });
            resolve(permissions);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createPermission,
    deletePermission,
    updatePermission,
    getAllPermissions,
    getPermissonById,
};
