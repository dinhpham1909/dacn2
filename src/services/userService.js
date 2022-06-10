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
//get user using promise and Sequelize where id
let getUserById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let user = await db.User.findOne({
                    where: {
                        id: id,
                    },
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
                if (user) {
                    resolve(user);
                } else {
                    reject('User not found');
                }
            } else {
                resolve('User id is required');
            }
        } catch (error) {
            reject(error);
        }
    });
};
//create user using promise and Sequelize
let createUser = async (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (user) {
                let newUser = await db.User.create(user);
                resolve(newUser);
            } else {
                reject('User is required');
            }
        } catch (error) {
            reject(error);
        }
    });
};
///check User exist using promise and Sequelize
let checkUserExist = async (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (email) {
                let user = await db.User.findOne({
                    where: {
                        email: email,
                    },
                });
                if (user) {
                    resolve(user);
                } else {
                    reject('User not found');
                }
            } else {
                reject('Email is required');
            }
        } catch (error) {
            reject(error);
        }
    });
};
//update user using promise and Sequelize

let updateUser = async (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (user.id) {
                //check user using find One after check attributes
                let userOne = await db.User.findOne({
                    where: {
                        id: user.id,
                    },
                });
                if (userOne) {
                    //check attributes
                    if (user.email) {
                        userOne.email = user.email;
                    }
                    if (user.password) {
                        userOne.password = user.password;
                    }
                    if (user.name) {
                        userOne.name = user.name;
                    }
                    if (user.phone) {
                        userOne.phone = user.phone;
                    }
                    if (user.address) {
                        userOne.address = user.address;
                    }
                    if (user.image) {
                        userOne.image = user.image;
                    }
                    userOne.save();
                    resolve(userOne);
                } else {
                    reject('User not found');
                }
            } else {
                reject('User id is required');
            }
        } catch (error) {
            reject(error);
        }
    });
};
//delete user using promise and Sequelize where id
let deleteUser = async (id) => {
    return new Promise((resolve, reject) => {
        try {
            if (id) {
                let user = db.User.destroy({
                    where: {
                        id: id,
                    },
                });
                if (user) {
                    resolve(user);
                } else {
                    reject('User not found');
                }
            } else {
                reject('User id is required');
            }
        } catch (error) {
            reject(error);
        }
    });
};

///module export all method
module.exports = {
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    checkUserExist: checkUserExist,
};
