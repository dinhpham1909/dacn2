import userService from '../services/userService';
import productService from '../services/productService';
import categoryService from '../services/categoryService';

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
        const update = await productData.updateProduct(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
let addProduct = async (req, res) => {
    try {
        const data = req.body;
        const update = await productData.addProduct(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// category
let getCategorys = async (req, res) => {
    let data = await categoryService.getAllCategorys();
    res.status(200).json(data);
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
};
