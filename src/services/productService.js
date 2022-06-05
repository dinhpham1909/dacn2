import db from '../models/index';

///funtion getAllProduct get all product and get Category where idCategory using sequelize and promise
let getAllProduct = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let fonts = await db.Product.findAll({
                include: [
                    {
                        model: db.Category,
                        where: { id: db.Product.idCategory },
                    },
                ],
            });
            resolve(fonts);
        } catch (error) {
            reject(error);
        }
    });
};
///funtion addProduct add product using sequelize and promise
let addProduct = async (product) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (product) {
                db.Product.create({
                    name: product.name,
                    price: product.price,
                    idCategory: product.idCategory,
                    description: product.description,
                    image: product.image,
                });
            }
            resolve(fonts);
        } catch (error) {
            reject(error);
        }
    });
};

//funtion deleteProduct delete product by id using sequelize and promise
let deleteProduct = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fonts = await db.Product.destroy({
                where: { id },
            });
            resolve('Delete product success');
        } catch (error) {
            reject(error);
        }
    });
};
//funtion updateProduct update product by id using sequelize and promise
let updateProduct = async (id, product) => {
    return new Promise(async (resolve, reject) => {
        try {
            let productFind = await db.Product.update(
                {
                    name: product.name,
                    price: product.price,
                    idCategory: product.idCategory,
                    description: product.description,
                    image: product.image,
                },
                {
                    where: { id },
                },
            );
            resolve(productFind);
        } catch (error) {
            reject(error);
        }
    });
};
//funtion getProductById get product by id using sequelize and promise
let getProductById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fonts = await db.Product.findOne({
                where: { id },
            });
            resolve(fonts);
        } catch (error) {
            reject(error);
        }
    });
};
//funtion getProductByCategory get product by id using sequelize and promise
let getProductByCategory = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fonts = await db.Product.findAll({
                where: { idCategory: id },
            });
            resolve(fonts);
        } catch (error) {
            reject(error);
        }
    });
};
//funtion getCountProduct get count producModel using sequelize and promise
let getCountProduct = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let count = await db.Product.count();
            resolve(count);
        } catch (error) {
            reject(error);
        }
    });
};

//fution GetPaginateProduct get product by page limit using sequelize and promise
let GetPaginateProduct = async (page, limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = await db.Product.findAll({
                offset: (page - 1) * limit,
                limit: limit,
            });
            ///count get count from getCountProduct
            let count = await getCountProduct();
            ///// data object add  count products page limit allPage
            let allPage = Math.ceil(count / limit);
            let data = {
                products: products,
                count: count,
                page: page,
                page: limit,
                allPage: allPage,
            };
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
};

///module export all medthod
module.exports = {
    getAllProduct: getAllProduct,
    addProduct: addProduct,
    deleteProduct: deleteProduct,
    updateProduct: updateProduct,
    getProductById: getProductById,
    getProductByCategory: getProductByCategory,
    GetPaginateProduct: GetPaginateProduct,
};
