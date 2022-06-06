import db from '../models/index';

//create new Role using promise and sequelize
let createRole = async (role) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (role) {
                let newRole = await db.Role.create({
                    name: role.name,
                    description: role.description,
                });
                resolve(newRole);
            }
            reject('role is required');
        } catch (error) {
            reject(error);
        }
    });
};
///Delete role using promise and Sequelize where id
let deleteRole = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let deletedRole = await db.Role.destroy({
                    where: {
                        id: id,
                    },
                });
                resolve(deletedRole);
            }
            reject('id is required');
        } catch (error) {
            reject(error);
        }
    });
};
let updateRole = async (role) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (role.id) {
                let updatedRole = await db.Role.update(
                    {
                        name: role.name,
                        description: role.description,
                    },
                    {
                        where: {
                            id: role.id,
                        },
                    },
                );
                resolve(updatedRole);
            } else {
                reject('role is required');
            }
            resolve(updatedRole);
        } catch (error) {
            reject(error);
        }
    });
};
let getAllRoles = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let roles = await db.Role.findAll({
                attributes: ['name', 'description'],
                include: [
                    {
                        model: db.Permission,
                        attributes: ['name', 'value'],
                        through: { attributes: [] },
                        as: 'permissions',
                    },
                ],
            });
            resolve(roles);
        } catch (error) {
            reject(error);
        }
    });
};
let getRoleById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let role = await db.Role.findOne({
                    where: {
                        id,
                    },
                    //include Permissions
                    include: [
                        {
                            model: db.Permission,
                            attributes: ['name', 'value'],
                            through: { attributes: [] },
                            as: 'permissions',
                        },
                    ],
                    //delet createAt and updateAt attributes
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                });
                resolve(role);
            } else {
                reject('id is required');
            }
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createRole,
    updateRole,
    deleteRole,
    getAllRoles,
    getRoleById,
};
