import db from '../models/index';
//create new RoleUser using promise and sequelize
let createRoleUser = async (roleUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (roleUser) {
                let newRoleUser = await db.RoleUser.create({
                    roleId: roleUser.roleId,
                    userId: roleUser.userId,
                });
                resolve(newRoleUser);
            }
            reject('roleUser is required');
        } catch (err) {
            reject(err);
        }
    });
};

//Delete roleUser using promise and Sequelize where id
let deleteRoleUser = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let deletedRoleUser = await db.RoleUser.destroy({
                    where: {
                        id: id,
                    },
                });
                resolve(deletedRoleUser);
            }
            reject('ID is required');
        } catch (error) {
            reject(error);
        }
    });
};

///delete roleUser using promise and Sequelize where id_user
let deleteRoleUserByIdUser = async (idUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (idUser) {
                let deletedRoleUser = await db.RoleUser.destroy({
                    where: {
                        userId: idUser,
                    },
                });
                resolve(deletedRoleUser);
            }
            reject('ID is required');
        } catch (error) {
            reject(error);
        }
    });
};
//delete roleUser using promise and Sequelize where id_role
let deleteRoleUserByIdRole = async (idRole) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (idRole) {
                let deletedRoleUser = await db.RoleUser.destroy({
                    where: {
                        roleId: idRole,
                    },
                });
                resolve(deletedRoleUser);
            }
            reject('ID is required');
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {
    createRoleUser,
    deleteRoleUser,
    deleteRoleUserByIdUser,
    deleteRoleUserByIdRole,
};
