import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/dashboard', homeController.getDashboardPage);

    // user
    router.get('/add_user', homeController.addUserPage);
    router.get('/user_index', homeController.getUserPage);
    router.get('/edit_user', homeController.editUserPage);

    // product
    router.get('/add_product', homeController.addProductPage);
    router.get('/product_index', homeController.getProductPage);
    router.get('/edit_product/:id', homeController.editProductPage);
    router.get('/delete_product/:id_product', homeController.deleteProduct);
    router.post('/update_product', homeController.updateProduct);
    router.post('/add_product', homeController.addProduct);

    // order
    router.get('/add_order', homeController.addOrderPage);
    router.get('/order_index', homeController.getOrderPage);
    router.get('/edit_order', homeController.editOrderPage);

    // order_details
    router.get('/add_order_details', homeController.addOrder_detailsPage);
    router.get('/order_details_index', homeController.getOrder_detailsPage);
    router.get('/edit_order_details', homeController.editOrder_detailsPage);

    return app.use('/', router);
};

module.exports = initWebRoute;
