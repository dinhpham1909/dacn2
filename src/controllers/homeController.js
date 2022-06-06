// import { render } from 'express/lib/response';
import userService from '../services/userService';
import roleService from '../services/roleService';

import productService from '../services/productService';
import orderService from '../services/orderService';
let getHomePage = async (req, res) => {
<<<<<<< HEAD
    let data = await productService.getAllProducts();
=======
    let data = await orderService.getAllOrders();
>>>>>>> be250e01b9524ef84712b22457e61804b388632f
    res.status(200).json(data);
};

let formartDate = (data) => {
    var date = new Date(data);
    return (
        ('00' + (date.getMonth() + 1)).slice(-2) +
        '/' +
        ('00' + date.getDate()).slice(-2) +
        '/' +
        date.getFullYear() +
        ' ' +
        ('00' + date.getHours()).slice(-2) +
        ':' +
        ('00' + date.getMinutes()).slice(-2) +
        ':' +
        ('00' + date.getSeconds()).slice(-2)
    );
};

//dashboard
let getDashboardPage = async (req, res) => {
    res.render('dashboards/dashboard');
};

//user
let addUserPage = async (req, res) => {
    res.render('users/add_user');
};
let getUserPage = async (req, res) => {
    res.render('users/user_index');
};
let editUserPage = async (req, res) => {
    res.render('users/edit_user');
};

//product
let addProductPage = async (req, res) => {
    return res.redirect('/index_product');
};

let addProduct = async (req, res) => {
    console.log(req.body);
    try {
        const data = req.body;
        const insert = await productService.addProduct(data);
        return res.redirect('/index_product');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

let getProductPage = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        products.forEach((element) => {
            element.createdAt = formartDate(element.createdAt);
            element.updatedAt = formartDate(element.updatedAt);
        });
        res.render('products/product_index', { events: products });
    } catch (error) {
        console.log(error);
    }
};
let editProductPage = async (req, res) => {
    try {
        const id = req.params.id;
        const oneEvent = await productService.getProductById(id);
        res.render('products/edit_product', { oneEvent: oneEvent[0] });
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let updateProduct = async (req, res) => {
    try {
        const data = req.body;
        const update = await productService.updateProduct(data);
        return res.redirect('/index_product');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let deleteProduct = async (req, res) => {
    console.log(req.params.id);
    try {
        const id = req.params.id;
        const deletedEvent = await productData.deleteProduct(id);
        return res.redirect('/index_product');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

//order
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
    addProduct: addProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,

    //order

    editOrderPage: editOrderPage,
    getOrderPage: getOrderPage,
    addOrderPage: addOrderPage,

    //order_details

    editOrder_detailsPage: editOrder_detailsPage,
    getOrder_detailsPage: getOrder_detailsPage,
    addOrder_detailsPage: addOrder_detailsPage,
};
