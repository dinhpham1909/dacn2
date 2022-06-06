import db from '../models/index';

//create new Order using promise and sequelize
let createOrder = async (order) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (order) {
                let newOrder = await db.Order.create({
                    id_user: order.id_user,
                    idOrderDetails: order.idOrderDetails,
                    price: order.price,
                    id_userBuy: order.id_userBuy,
                    status: order.status,
                });
                resolve(newOrder);
            }
            reject('order is required');
        } catch (error) {
            reject(error);
        }
    });
};
//delete OrderDetails using promise and Sequelize where id
let deleteOrderDetails = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let deletedOrderDetails = await db.OrderDetails.destroy({
                    where: {
                        id: id,
                    },
                });
                resolve(deletedOrderDetails);
            }
            reject('ID is required');
        } catch (error) {
            reject(error);
        }
    });
};
