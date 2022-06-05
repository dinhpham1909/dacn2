import { render } from 'express/lib/response';
import userService from '../services/userService';
let getHomePage = async (req, res) => {
    let user = await userService.getAllUser();
    res.status(200).json(user);
};
let getDashboardPage = async (req, res) => {
    res.render('dashboards/dashboard');
};
//
//user
//
let addUserPage = async (req, res) => {
    res.render('users/add_user');
};
let getUserPage = async (req, res) => {
    res.render('users/user_index');
};
let editUserPage = async (req, res) => {
    res.render('users/edit_user');
};
//
//product
//
let addProductPage = async (req, res) => {
    res.render('products/add_product');
};
let getProductPage = async (req, res) => {
    res.render('products/product_index');
};
let editProductPage = async (req, res) => {
    res.render('products/edit_product');
};
//
//order
//
let addOrderPage = async (req, res) => {
    res.render('orders/add_order');
};
let getOrderPage = async (req, res) => {
    res.render('orders/order_index');
};
let editOrderPage = async (req, res) => {
    res.render('orders/edit_order');
};
//
//order_details
//
let addOrder_detailsPage = async (req, res) => {
    res.render('orders_details/add_order_details');
};
let getOrder_detailsPage = async (req, res) => {
    res.render('orders_details/order_details_index');
};
let editOrder_detailsPage = async (req, res) => {
    res.render('orders_details/edit_order_details');
};
module.exports = {
    getHomePage: getHomePage,
    getDashboardPage: getDashboardPage,

    //user

    editUserPage: editUserPage,
    getUserPage: getUserPage,
    addUserPage: addUserPage,

    //product

    editProductPage: editProductPage,
    getProductPage: getProductPage,
    addProductPage: addProductPage,

    //order

    editOrderPage: editOrderPage,
    getOrderPage: getOrderPage,
    addOrderPage: addOrderPage,

    //order_details

    editOrder_detailsPage: editOrder_detailsPage,
    getOrder_detailsPage: getOrder_detailsPage,
    addOrder_detailsPage: addOrder_detailsPage,
};
