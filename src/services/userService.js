import db from '../models/index';

let getAllUser = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let fonts = await db.User.findAll();
            resolve(fonts);
        } catch (error) {
            reject(error);
        }
    });
};
let addUser = async (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (user) {
                db.User.create({
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    address: user.address,
                    phone: user.phone,
                    idCN: user.idCN,
                    role: user.role,
                });
            }
            resolve(fonts);
        } catch (error) {
            reject(error);
        }
    });
};
///funtion deleteUser delelete user by id using sequelize and promise
let deleteUser = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fonts = await db.User.destroy({
                where: { id },
            });
            resolve('Delete user success');
        } catch (error) {
            reject(error);
        }
    });
};
//funtion updateUser update user by id using sequelize and promise
let updateUser = async (id, user) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userFind = await db.User.update(
                {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    address: user.address,
                    phone: user.phone,
                    idCN: user.idCN,
                    role: user.role,
                },
                {
                    where: { id },
                },
            );
            resolve('Update user success');
        } catch (error) {
            reject(error);
        }
    });
};
//funtion getUserById get user by id using sequelize and promise
let getUserById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id },
            });
            resolve(user);
        } catch (error) {
            reject(error);
        }
    });
};
//fution getCountUser get count user using sequelize and promise
let getCountUser = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let count = await db.User.count();
            resolve(count);
        } catch (error) {
            reject(error);
        }
    });
};
//funtion paginateProduct paginate product by page using sequelize and promise
let paginateUser = async (page, limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            ///count user from getCountUser
            let count = await getCountUser();
            let allPage = Math.ceil(count / limit);

            let users = await db.User.findAndCountAll({
                offset: (page - 1) * limit,
                limit: limit,
            });
            //data object add  count products page limit allPage
            let data = {
                users: users,
                count: count,
                page: page,
                page: limit,
                allPage: allPage,
            };
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
};

//funtion getRoleUserById get role user by id using sequelize and promise
let getRoleUserById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id },
            });
            resolve(user.role);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    getAllUser: getAllUser,
    addUser: addUser,
    deleteUser: deleteUser,
    updateUser: updateUser,
    getUserById: getUserById,
    getRoleUserById: getRoleUserById,
    paginateUser: paginateUser,
};
