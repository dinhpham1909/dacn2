import db from '../models/index';
//get all Users from database using sequelize and promise
let getAllUsers = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                //include Role

                include: [
                    {
                        model: db.Role,
                        attributes: ['name'],
                        as: 'roles',
                        through: { attributes: [] },
                        exclude: ['created_at', 'updated_at'],
                        //inclue Permission delete P
                        include: [
                            {
                                model: db.Permission,
                                attributes: ['name', 'value'],
                                as: 'permissions',
                                through: { attributes: [] },
                                exclude: ['created_at', 'updated_at'],
                                //include PermissionCategory
                                include: [
                                    {
                                        model: db.PermissionCategory,
                                        attributes: ['name', 'description'],
                                        as: 'permission_category',
                                        exclude: ['created_at', 'updated_at'],
                                    },
                                ],
                            },
                        ],
                    },
                ],
                exclude: ['created_at', 'updated_at'],
            });
            resolve(users);
        } catch (error) {
            reject(error);
        }
    });
};
///module export all method
module.exports = {
    getAllUsers: getAllUsers,
};
