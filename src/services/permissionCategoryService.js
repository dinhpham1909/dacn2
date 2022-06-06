import db from '../models/index';
//create new PermissionsCategory using promise and sequelize
let createPermissionsCategory = async (permissionsCategory) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (permissionsCategory) {
                let newPermissionsCategory = await db.PermissionsCategory.create({
                    name: permissionsCategory.name,
                    description: permissionsCategory.description,
                });
                resolve(newPermissionsCategory);
            } else {
                reject('permissionsCategory is required');
            }
        } catch (error) {
            reject(error);
        }
    });
};
//Delete PermissionsCategory using promise and Sequelize where id
let deletePermissionsCategory = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let deletedPermissionsCategory = await db.PermissionsCategory.destroy({
                    where: {
                        id: id,
                    },
                });
                resolve(deletedPermissionsCategory);
            } else {
                reject('id is required');
            }
        } catch (error) {
            reject(error);
        }
    });
};

//Update PermissionsCategory using promise and Sequelize where id
let updatePermissionsCategory = async (permissionsCategory) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (permissionsCategory) {
                ///findOne after asign value and save
                let updatedPermissionsCategory = await db.PermissionsCategory.findOne({
                    where: {
                        id: permissionsCategory.id,
                    },
                });
                if (updatedPermissionsCategory) {
                    if (permissionsCategory.name) {
                        updatedPermissionsCategory.name = permissionsCategory.name;
                    }
                    if (permissionsCategory.description) {
                        updatedPermissionsCategory.description = permissionsCategory.description;
                    }
                    updatedPermissionsCategory.save();
                    resolve(updatedPermissionsCategory);
                } else {
                    reject('permissionsCategory is required');
                }
            }
        } catch (error) {
            reject(error);
        }
    });
};
//Get all PermissionsCategory using promise and Sequelize
let getAllPermissionsCategory = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allPermissionsCategory = await db.PermissionsCategory.findAll({
                //remove createAt and updateAt
                attributes: ['id', 'name', 'description'],
                //include Permissions
                include: [
                    {
                        model: db.Permission,
                        as: 'permissions',
                        attributes: ['name', 'value'],
                    },
                ],
            });
            resolve(allPermissionsCategory);
        } catch (error) {
            reject(error);
        }
    });
};
//Get PermissionsCategory using promise and Sequelize where id
let getPermissionsCategoryById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let permissionsCategory = await db.PermissionsCategory.findOne({
                    where: {
                        id: id,
                    },
                    //include Permissions
                    include: [
                        {
                            model: db.Permission,
                            as: 'permissions',
                            attributes: ['name', 'value'],
                        },
                    ],
                });
                resolve(permissionsCategory);
            } else {
                reject('id is required');
            }
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {
    getAllPermissionsCategory,
    getPermissionsCategoryById,
    createPermissionsCategory,
    updatePermissionsCategory,
    deletePermissionsCategory,
};
