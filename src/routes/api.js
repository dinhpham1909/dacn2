import express from 'express';
import ApiController from '../controllers/ApiController';
const router = express.Router();

const { getProducts, getIDProduct, deleteProduct, addProduct, updateProduct } = ApiController;

router.get('/products', getProducts);
router.get('/products/:id', getIDProduct);
router.get('/products_delete/:id', deleteProduct);
router.post('/products_update', updateProduct);
router.post('/products_add', addProduct);

module.exports = {
    routes: router,
};
