import db from '../models/index';
//get all Order using sequelize and promise
let getAllOrder = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let fonts = await db.Order.findAll();
            resolve(fonts);
        } catch (error) {
            reject(error);
        }
    });
};

//get all Order by id using sequelize and promise
let getOrderById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fonts = await db.Order.findOne({
                where: { id },
            });
            resolve(fonts);
        } catch (error) {
            reject(error);
        }
    });
};
///get count Order using sequelize and promise
let getCountOrder = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let count = await db.Order.count();
            resolve(count);
        } catch (error) {
            reject(error);
        }
    });
};
//add Order using sequelize and promise
let addOrder = async (order) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (order) {
                db.Order.create({
                    idUser: order.idUser,
                    idProduct: order.idProduct,
                    quantity: order.quantity,
                    total: order.total,
                    status: order.status,
                    createdAt: order.createdAt,
                    updatedAt: order.updatedAt,
                });
            }
            resolve(true);
        } catch (error) {
            reject(error);
        }
    });
};
//update Order using sequelize and promise
let updateOrder = async (id, order) => {
    return new Promise(async (resolve, reject) => {
        try {
            let orderFind = await db.Order.update(
                {
                    idUser: order.idUser,
                    idProduct: order.idProduct,
                    quantity: order.quantity,
                    total: order.total,
                    status: order.status,
                    createdAt: order.createdAt,
                    updatedAt: order.updatedAt,
                },
                {
                    where: { id },
                },
            );
            resolve(orderFind);
        } catch (error) {
            reject(error);
        }
    });
};
//update status Order using sequelize and promise where id
let updateStatusOrder = async (id, status) => {
    return new Promise(async (resolve, reject) => {
        try {
            let orderFind = await db.Order.update(
                {
                    status: status,
                },
                {
                    where: { id },
                },
            );
            resolve(orderFind);
        } catch (error) {
            reject(error);
        }
    });
};
///detele Order by id using sequelize and promise
let deleteOrder = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fonts = await db.Order.destroy({
                where: { id },
            });
            resolve('Delete order success');
        } catch (error) {
            reject(error);
        }
    });
};
//paginate Order using sequelize and promise
let paginateOrder = async (page, limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            ///count from getCountOrder
            let count = await getCountOrder();
            ///get page from count and limit
            let Allpage = Math.ceil(count / limit);
            let orders = await db.Order.findAll({
                limit: limit,
                offset: (page - 1) * limit,
            });
            let data = {
                orders: orders,
                count: count,
                page: page,
                limit: limit,
                allPage: Allpage,
            };
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
};
///module export all function
module.exports = {
    getAllOrder: getAllOrder,
    getOrderById: getOrderById,
    getCountOrder: getCountOrder,
    addOrder: addOrder,
    updateOrder: updateOrder,
    updateStatusOrder: updateStatusOrder,
    deleteOrder: deleteOrder,
    paginateOrder: paginateOrder,
};
