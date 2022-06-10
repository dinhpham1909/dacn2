import userService from '../services/userService';
import roleService from '../services/roleService';
import productService from '../services/productService';
import categoryService from '../services/categoryService';
import chinhanhService from '../services/chinhanhService';
import orderService from '../services/orderService';
import orderDetailsService from '../services/orderDetailService';

import db from '../models/index';
import { token } from 'morgan';
const jwt = require('jsonwebtoken');

// User
let getUsers = async (req, res) => {
    let data = await userService.getAllUsers();
    res.status(200).json(data);
};
let getIDUser = async (req, res) => {
    const id_User = req.params.id;
    let data = await userService.getUserById(id_User);
    res.status(200).json(data);
};
let deleteUser = async (req, res) => {
    const id_User = req.params.id;
    let data = await userService.deleteUser(id_User);
    res.status(200).json(data);
};
let updateUser = async (req, res) => {
    try {
        const data = req.body;
        const update = await userService.updateUser(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let addUser = async (req, res) => {
    try {
        const data = req.body;
        const add = await userService.createUser(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// role
let getRoles = async (req, res) => {
    let data = await roleService.getAllRoles();
    res.status(200).json(data);
};
let getIDRole = async (req, res) => {
    const id_role = req.params.id;
    let data = await roleService.getRoleById(id_role);
    res.status(200).json(data);
};
let deleteRole = async (req, res) => {
    const id_role = req.params.id;
    let data = await roleService.deleteRole(id_role);
    res.status(200).json(data);
};
let updateRole = async (req, res) => {
    try {
        const data = req.body;
        const update = await roleService.updateRole(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let addRole = async (req, res) => {
    try {
        const data = req.body;
        const add = await roleService.createRole(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

//product
let getProducts = async (req, res) => {
    let data = await productService.getAllProducts();
    res.status(200).json(data);
};
let getIDProduct = async (req, res) => {
    const id_product = req.params.id;
    let data = await productService.getProductById(id_product);
    res.status(200).json(data);
};
let deleteProduct = async (req, res) => {
    const id_product = req.params.id;
    let data = await productService.deleteProduct(id_product);
    res.status(200).json(data);
};
let updateProduct = async (req, res) => {
    try {
        const data = req.body;
        const update = await productService.updateProduct(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let addProduct = async (req, res) => {
    try {
        const data = req.body;
        const update = await productService.addProduct(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// category
let getCategorys = async (req, res) => {
    let data = await categoryService.getAllCategory();
    res.status(200).json(data);
};
let getIDCategory = async (req, res) => {
    const id_category = req.params.id;
    let data = await categoryService.getCategoryById(id_category);
    res.status(200).json(data);
};
let deleteCategory = async (req, res) => {
    const id_category = req.params.id;
    let data = await categoryService.deleteCategory(id_category);
    res.status(200).json(data);
};
let updateCategory = async (req, res) => {
    try {
        const data = req.body;
        const update = await categoryService.updateCategory(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let addCategory = async (req, res) => {
    try {
        const data = req.body;
        const add = await categoryService.addCategory(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// chinhanh
let getchinhanhs = async (req, res) => {
    let data = await chinhanhService.getAllchinhanh();
    res.status(200).json(data);
};
let getIDchinhanh = async (req, res) => {
    const id_chinhanh = req.params.id;
    let data = await chinhanhService.getchinhanhById(id_chinhanh);
    res.status(200).json(data);
};
let deletechinhanh = async (req, res) => {
    const id_chinhanh = req.params.id;
    let data = await chinhanhService.deletechinhanh(id_chinhanh);
    res.status(200).json(data);
};
let updatechinhanh = async (req, res) => {
    try {
        const data = req.body;
        const update = await chinhanhService.updatechinhanh(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let addchinhanh = async (req, res) => {
    try {
        const data = req.body;
        const add = await chinhanhService.addchinhanh(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Order
let getOrders = async (req, res) => {
    let data = await orderService.getAllOrders();
    res.status(200).json(data);
};
let getIDOrder = async (req, res) => {
    const id_Order = req.params.id;
    let data = await orderService.getOrderById(id_Order);
    res.status(200).json(data);
};
let deleteOrder = async (req, res) => {
    const id_Order = req.params.id;
    let data = await orderService.deleteOrder(id_Order);
    res.status(200).json(data);
};
let updateOrder = async (req, res) => {
    try {
        const data = req.body;
        const update = await orderService.updateOrder(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let addOrder = async (req, res) => {
    try {
        const data = req.body;
        const add = await orderService.addOrder(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

//orderDetails
let deleteOrderDetails = async (req, res) => {
    const id_Order = req.params.id;
    let data = await orderDetailsService.deleteOrderDetails(id_Order);
    res.status(200).json(data);
};
let createOrderDetails = async (req, res) => {
    try {
        const data = req.body;
        const add = await orderDetailsService.createOrderDetails(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

//login
let login = async (req, res) => {
    const { email, password } = req.body;
    const userWithEmail = await db.User.findOne({ where: { email } }).catch((err) => {
        console.log('Erorr:', err);
    });
    if (!userWithEmail) return res.json({ message: 'Email hoặc mật khẩu không đúng' });

    if (userWithEmail.password !== password) return res.json({ message: 'Email hoặc mật khẩu không đúng' });

    const jwtToken = jwt.sign({ id: userWithEmail.id, email: userWithEmail.email }, process.env.JWT_SECRET);
    res.json({ message: 'Wellcome to Site', token: jwtToken });
};

// register
let register = async (req, res) => {
    console.log(req.body);
    const { name, email, address, image, password, phone } = req.body;
    const alreadyExistUser = await db.User.findOne({ where: { email } }).catch((err) => {
        console.log('Error: ', err);
    });

    if (alreadyExistUser) {
        res.json({ message: 'Email đã có người sử dụng trong hệ thống' });
    } else {
        const newUser = new db.User({ name, email, address, image, password, phone });
        const saveUser = await newUser.save().catch((err) => {
            console.log('Error: ', err);
            res.json({ error: 'Không thể đăng kí người dùng' });
        });
        if (saveUser) res.json({ message: 'Đăng kí thành công' });
        else res.json({ error: 'Không thể đăng kí người dùng' });
    }
};

let test = async (req, res, next) => {
    res.json('enter over night');
    next();
};
module.exports = {
    //product
    getProducts: getProducts,
    getIDProduct: getIDProduct,
    deleteProduct: deleteProduct,
    updateProduct: updateProduct,
    addProduct: addProduct,

    //category
    getCategorys: getCategorys,
    getIDCategory: getIDCategory,
    deleteCategory: deleteCategory,
    updateCategory: updateCategory,
    addCategory: addCategory,

    //chinhanh
    getchinhanhs: getchinhanhs,
    getIDchinhanh: getIDchinhanh,
    deletechinhanh: deletechinhanh,
    updatechinhanh: updatechinhanh,
    addchinhanh: addchinhanh,

    //order
    getOrders: getOrders,
    getIDOrder: getIDOrder,
    deleteOrder: deleteOrder,
    updateOrder: updateOrder,
    addOrder: addOrder,

    //User
    getUsers: getUsers,
    getIDUser: getIDUser,
    deleteUser: deleteUser,
    updateUser: updateUser,
    addUser: addUser,

    //Role
    getRoles: getRoles,
    getIDRole: getIDRole,
    deleteRole: deleteRole,
    updateRole: updateRole,
    addRole: addRole,

    //orderDetails
    deleteOrderDetails: deleteOrderDetails,
    createOrderDetails: createOrderDetails,

    //register
    register: register,
    login: login,
    test: test,
};
