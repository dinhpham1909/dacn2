import db from '../models/index';

//get OrderDetail by idOrder using sequelize and promise
let getOrderDetailByIdOrder = async (idOrder) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fonts = await db.OrderDetail.findAll({
                where: { idOrder: idOrder },
            });
            resolve(fonts);
        } catch (error) {
            reject(error);
        }
    });
};

// add OrderDetail using sequelize and promise
let addOrderDetail = async (orderDetail) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (orderDetail) {
                db.OrderDetail.create({
                    idOrder: orderDetail.idOrder,
                    idProduct: orderDetail.idProduct,
                    quantity: orderDetail.quantity,
                    total: orderDetail.total,
                    createdAt: orderDetail.createdAt,
                    updatedAt: orderDetail.updatedAt,
                });
            }
            resolve(true);
        } catch (error) {
            reject(error);
        }
    });
};
//delete OrderDetail by id using sequelize and promise
let deleteOrderDetail = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fonts = await db.OrderDetail.destroy({
                where: { id },
            });
            resolve('Delete orderDetail success');
        } catch (error) {
            reject(error);
        }
    });
};
//delelete OrderDetail by idOrder using sequelize and promise
let deleteOrderDetailByIdOrder = async (idOrder) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fonts = await db.OrderDetail.destroy({
                where: { idOrder },
            });
            resolve('Delete orderDetail success');
        } catch (error) {
            reject(error);
        }
    });
};
//update OrderDetail by id using sequelize and promise
let updateOrderDetail = async (id, orderDetail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let orderDetailFind = await db.OrderDetail.update(
                {
                    idOrder: orderDetail.idOrder,
                    idProduct: orderDetail.idProduct,
                    quantity: orderDetail.quantity,
                    total: orderDetail.total,
                    createdAt: orderDetail.createdAt,
                    updatedAt: orderDetail.updatedAt,
                },
                {
                    where: { id },
                },
            );
            resolve(orderDetailFind);
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {
    getOrderDetailByIdOrder: getOrderDetailByIdOrder,
    addOrderDetail: addOrderDetail,
    deleteOrderDetail: deleteOrderDetail,
    deleteOrderDetailByIdOrder: deleteOrderDetailByIdOrder,
    updateOrderDetail: updateOrderDetail,
};
