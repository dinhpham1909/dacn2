import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/dashboard', homeController.getDashboardPage);

    // user
    router.get('/add_user', homeController.addUserPage);
    router.get('/user_index', homeController.getUserPage);
    router.get('/edit_user/:id', homeController.editUserPage);
    router.get('/delete_user/:id', homeController.deleteUser);
    router.post('/update_user', homeController.updateUser);
    router.post('/add_user', homeController.addUser);

    // product
    router.get('/add_product', homeController.addProductPage);
    router.get('/product_index', homeController.getProductPage);
    router.get('/edit_product/:id', homeController.editProductPage);
    router.get('/delete_product/:id', homeController.deleteProduct);
    router.post('/update_product', homeController.updateProduct);
    router.post('/add_product', homeController.addProduct);

    // category
    router.get('/add_category', homeController.addCategoryPage);
    router.get('/category_index', homeController.getCategoryPage);
    router.get('/edit_category/:id', homeController.editCategoryPage);
    router.get('/delete_category/:id', homeController.deleteCategory);
    router.post('/update_category', homeController.updateCategory);
    router.post('/add_category', homeController.addCategory);

    // chinhanh
    router.get('/add_chinhanh', homeController.addchinhanhPage);
    router.get('/chinhanh_index', homeController.getchinhanhPage);
    router.get('/edit_chinhanh/:id', homeController.editchinhanhPage);
    router.get('/delete_chinhanh/:id', homeController.deletechinhanh);
    router.post('/update_chinhanh', homeController.updatechinhanh);
    router.post('/add_chinhanh', homeController.addchinhanh);

    // order
    router.get('/add_order', homeController.addOrderPage);
    router.get('/order_index', homeController.getOrderPage);
    router.get('/edit_order/:id', homeController.editOrderPage);
    router.get('/delete_order/:id', homeController.deleteOrder);
    router.post('/update_order', homeController.updateOrder);
    router.post('/add_order', homeController.addOrder);

    // order_details
    router.get('/add_order_details', homeController.addOrder_detailsPage);
    router.get('/order_details_index', homeController.getOrder_detailsPage);
    router.get('/edit_order_details', homeController.editOrder_detailsPage);

    return app.use('/', router);
};

module.exports = initWebRoute;
