import db from '../models/index';

//create Order using promise and sequelize
let createOrder = async (order) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (order) {
                let newOrder = await db.Order.create({
                    id_user: order.id_user,
                    id_oder_details: order.id_oder_details,
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
//get All Order using promise and sequelize
let getAllOrders = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allOrder = await db.Order.findAll({
                //include OrderDetails
                include: [
                    {
                        model: db.OrderDetails,
                        attributes: ['id', 'product_id', 'quantity'],
                        as: 'orderdetails',
                        include: [
                            {
                                model: db.Product,
                                raw: true,
                                as: 'product',
                                include: [
                                    {
                                        model: db.Category,
                                        attributes: ['name'],
                                        raw: true,
                                        as: 'category',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        model: db.User,
                        as: 'user',
                    },
                ],
            }).catch((error) => {
                console.log(error);
            });
            resolve(allOrder);
        } catch (error) {
            reject(error);
        }
    });
};
//delete Order using promise and sequelize where id
let deleteOrder = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let deletedOrder = await db.Order.destroy({
                    where: {
                        id: id,
                    },
                    include: [
                        {
                            model: db.OrderDetails,
                        },
                    ],
                });
                resolve(deletedOrder);
            } else {
                reject('id is required');
            }
        } catch (error) {
            reject(error);
        }
    });
};
//update Order using promise and sequelize where id
let updateOrder = async (order) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (order.id) {
                //using findOne check attribute and update
                let existingOrder = await db.Order.findOne({
                    where: {
                        id: order.id,
                    },
                });
                if (existingOrder) {
                    //check attribute and update
                    if (order.id_user) {
                        existingOrder.id_user = order.id_user;
                    }
                    if (order.id_oder_details) {
                        existingOrder.id_oder_details = order.id_oder_details;
                    }
                    if (order.price) {
                        existingOrder.price = order.price;
                    }
                    if (order.id_userBuy) {
                        existingOrder.id_userBuy = order.id_userBuy;
                    }
                    if (order.status) {
                        existingOrder.status = order.status;
                    }
                    existingOrder.save();
                    resolve(existingOrder);
                } else {
                    reject('Order not found');
                }
            } else {
                reject('Order id is required');
            }
        } catch (error) {
            reject(error);
        }
    });
};
//get Order using promise and sequelize where id
let getOrderById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let order = await db.Order.findOne({
                    where: {
                        id: id,
                    },
                    include: [
                        {
                            model: db.OrderDetails,
                            attributes: ['id', 'id_product', 'quantity'],
                            as: 'orderDetails',
                            include: [
                                {
                                    model: db.Product,
                                    attributes: ['name', 'price', 'image'],
                                    as: 'product',
                                    include: [
                                        {
                                            model: db.Category,
                                            attributes: ['name'],
                                            as: 'category',
                                        },
                                    ],
                                },
                            ],
                            include: [
                                {
                                    model: db.User,
                                    attributes: ['name', 'email'],
                                    as: 'user',
                                },
                            ],
                        },
                    ],
                });
                resolve(order);
            } else {
                reject('id is required');
            }
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {
    createOrder,
    getAllOrders,
    deleteOrder,
    updateOrder,
    getOrderById,
};
