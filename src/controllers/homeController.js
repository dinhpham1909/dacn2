// import { render } from 'express/lib/response';
import userService from '../services/userService';
import productService from '../services/productService';
import categoryService from '../services/categoryService';
import orderService from '../services/orderService';
import orderDetailsService from '../services/orderDetailService';
import chinhanhService from '../services/chinhanhService';

let getHomePage = async (req, res) => {
    let data = await productService.getAllProducts();
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

// user
let getUserPage = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.render('users/user_index', { events: users });
    } catch (error) {
        console.log(error);
    }
};
let addUserPage = async (req, res) => {
    const user = await userService.getAllUsers();
    res.render('users/add_user');
};
let addUser = async (req, res) => {
    console.log(req.body);
    try {
        const data = req.body;
        const insert = await userService.createUser(data);
        return res.redirect('/user_index');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let editUserPage = async (req, res) => {
    try {
        const id = req.params.id;
        const oneEvent = await userService.getUserById(id);
        res.render('users/edit_user', { oneEvent: oneEvent });
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let updateUser = async (req, res) => {
    try {
        const data = req.body;
        const update = await userService.updateUser(data);
        return res.redirect('/user_index');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let deleteUser = async (req, res) => {
    console.log(req.params.id);
    try {
        const id = req.params.id;
        const deletedEvent = await userService.deleteUser(id);
        return res.redirect('/user_index');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

//product
let addProductPage = async (req, res) => {
    const category = await categoryService.getAllCategory();
    res.render('products/add_product', { category: category });
};

let addProduct = async (req, res) => {
    console.log(req.body);
    try {
        const data = req.body;
        const insert = await productService.addProduct(data);
        return res.redirect('/product_index');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

let getProductPage = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.render('products/product_index', { events: products });
    } catch (error) {
        console.log(error);
    }
};
let editProductPage = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await categoryService.getAllCategory();
        const oneEvent = await productService.getProductById(id);
        res.render('products/edit_product', { oneEvent: oneEvent, category: category });
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let updateProduct = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const update = await productService.updateProduct(data);
        return res.redirect('/product_index');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let deleteProduct = async (req, res) => {
    console.log(req.params.id);
    try {
        const id = req.params.id;
        const deletedEvent = await productService.deleteProduct(id);
        return res.redirect('/product_index');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// category
let getCategoryPage = async (req, res) => {
    try {
        const categorys = await categoryService.getAllCategory();
        res.render('categorys/category_index', { events: categorys });
    } catch (error) {
        console.log(error);
    }
};
let addCategoryPage = async (req, res) => {
    const category = await categoryService.getAllCategory();
    res.render('categorys/add_category');
};
let addCategory = async (req, res) => {
    console.log(req.body);
    try {
        const data = req.body;
        const insert = await categoryService.addCategory(data);
        return res.redirect('/category_index');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let editCategoryPage = async (req, res) => {
    try {
        const id = req.params.id;
        const oneEvent = await categoryService.getCategoryById(id);
        res.render('categorys/edit_category', { oneEvent: oneEvent });
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let updateCategory = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const update = await categoryService.updateCategory(data);
        return res.redirect('/category_index');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let deleteCategory = async (req, res) => {
    console.log(req.params.id);
    try {
        const id = req.params.id;
        const deletedEvent = await categoryService.deleteCategory(id);
        return res.redirect('/category_index');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// chinhanh
let getchinhanhPage = async (req, res) => {
    try {
        const chinhanhs = await chinhanhService.getAllchinhanh();
        res.render('chinhanhs/chinhanh_index', { events: chinhanhs });
    } catch (error) {
        console.log(error);
    }
};
let addchinhanhPage = async (req, res) => {
    const chinhanh = await chinhanhService.getAllchinhanh();
    res.render('chinhanhs/add_chinhanh');
};
let addchinhanh = async (req, res) => {
    console.log(req.body);
    try {
        const data = req.body;
        const insert = await chinhanhService.addchinhanh(data);
        return res.redirect('/chinhanh_index');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let editchinhanhPage = async (req, res) => {
    try {
        const id = req.params.id;
        const oneEvent = await chinhanhService.getchinhanhById(id);
        res.render('chinhanhs/edit_chinhanh', { oneEvent: oneEvent });
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let updatechinhanh = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const update = await chinhanhService.updatechinhanh(data);
        return res.redirect('/chinhanh_index');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let deletechinhanh = async (req, res) => {
    console.log(req.params.id);
    try {
        const id = req.params.id;
        const deletedEvent = await chinhanhService.deletechinhanh(id);
        return res.redirect('/chinhanh_index');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
//order
let getOrderPage = async (req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        res.render('orders/order_index', { events: orders });
    } catch (error) {
        console.log(error);
    }
};
let addOrderPage = async (req, res) => {
    const order = await orderService.getAllOrders();
    const chinhanhs = await chinhanhService.getAllchinhanh();
    res.render('orders/add_order', { chinhanhs: chinhanhs });
};
let addOrder = async (req, res) => {
    console.log(req.body);
    try {
        const data = req.body;
        const insert = await orderService.createOrder(data);
        return res.redirect('/order_index');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let editOrderPage = async (req, res) => {
    try {
        const id = req.params.id;
        const chinhanhs = await chinhanhService.getAllchinhanh();
        const oneEvent = await orderService.getOrderById(id);
        res.render('orders/edit_order', { oneEvent: oneEvent, chinhanhs: chinhanhs });
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let updateOrder = async (req, res) => {
    try {
        const data = req.body;
        const update = await orderService.updateOrder(data);
        return res.redirect('/order_index');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let deleteOrder = async (req, res) => {
    console.log(req.params.id);
    try {
        const id = req.params.id;
        const deletedEvent = await orderData.deleteOrder(id);
        return res.redirect('/order_index');
    } catch (error) {
        res.status(400).send(error.message);
    }
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

    //User
    editUserPage: editUserPage,
    getUserPage: getUserPage,
    addUserPage: addUserPage,
    addUser: addUser,
    updateUser: updateUser,
    deleteUser: deleteUser,

    //product
    editProductPage: editProductPage,
    getProductPage: getProductPage,
    addProductPage: addProductPage,
    addProduct: addProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,

    //Category
    editCategoryPage: editCategoryPage,
    getCategoryPage: getCategoryPage,
    addCategoryPage: addCategoryPage,
    addCategory: addCategory,
    updateCategory: updateCategory,
    deleteCategory: deleteCategory,

    //chinhanh
    editchinhanhPage: editchinhanhPage,
    getchinhanhPage: getchinhanhPage,
    addchinhanhPage: addchinhanhPage,
    addchinhanh: addchinhanh,
    updatechinhanh: updatechinhanh,
    deletechinhanh: deletechinhanh,

    //Order
    editOrderPage: editOrderPage,
    getOrderPage: getOrderPage,
    addOrderPage: addOrderPage,
    addOrder: addOrder,
    updateOrder: updateOrder,
    deleteOrder: deleteOrder,

    //order_details
    editOrder_detailsPage: editOrder_detailsPage,
    getOrder_detailsPage: getOrder_detailsPage,
    addOrder_detailsPage: addOrder_detailsPage,
};
