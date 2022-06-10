import express from 'express';
import ApiController from '../controllers/ApiController';
const passport = require('../controllers/passport');
const verified = require('../controllers/verifyToken');
const router = express.Router();
require('dotenv').config();
const {
    // User
    getUsers,
    getIDUser,
    deleteUser,
    updateUser,
    addUser,

    // Role
    getRoles,
    getIDRole,
    deleteRole,
    updateRole,
    addRole,

    //product
    getProducts,
    getIDProduct,
    deleteProduct,
    addProduct,
    updateProduct,

    // chinhanh
    getchinhanhs,
    getIDchinhanh,
    deletechinhanh,
    updatechinhanh,
    addchinhanh,

    // category
    getCategorys,
    getIDCategory,
    deleteCategory,
    updateCategory,
    addCategory,

    // order
    getOrders,
    getIDOrder,
    deleteOrder,
    updateOrder,
    addOrder,

    // orderDetails
    createOrderDetails,
    deleteOrderDetails,

    //register, login
    register,
    login,
    test,
} = ApiController;

//user
router.get('/users', getUsers);
router.get('/users/:id', getIDUser);
router.get('/users_delete/:id', deleteUser);
router.post('/users_update', updateUser);
router.post('/users_add', addUser);

//role
router.get('/roles', getRoles);
router.get('/roles/:id', getIDRole);
router.get('/roles_delete/:id', deleteRole);
router.post('/roles_update', updateRole);
router.post('/roles_add', addRole);

//product
router.get('/products', getProducts);
router.get('/products/:id', getIDProduct);
router.get('/products_delete/:id', deleteProduct);
router.post('/products_update', updateProduct);
router.post('/products_add', addProduct);

//category
router.get('/categories', getCategorys);
router.get('/categories/:id', getIDCategory);
router.get('/categories_delete/:id', deleteCategory);
router.post('/categories_update', updateCategory);
router.post('/categories_add', addCategory);

//chinhanh
router.get('/chinhanhs', getchinhanhs);
router.get('/chinhanhs/:id', getIDchinhanh);
router.get('/chinhanhs_delete/:id', deletechinhanh);
router.post('/chinhanhs_update', updatechinhanh);
router.post('/chinhanhs_add', addchinhanh);

//order
router.get('/orders', getOrders);
router.get('/orders/:id', getIDOrder);
router.get('/orders_delete/:id', deleteOrder);
router.post('/orders_update', updateOrder);
router.post('/orders_add', addOrder);

//orderDetails
router.post('/ordersDetails_add', createOrderDetails);
router.get('/ordersDetails_delete/:id', deleteOrderDetails);

//register
router.post('/register', register);
router.post('/login', login);
router.get('/test', test);
module.exports = {
    routes: router,
};
