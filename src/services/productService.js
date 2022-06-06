import db from '../models/index';

//get all products from database using sequelize and promise
let getAllProducts = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = await db.Product.findAll({
                include: [
                    {
                        model: db.Category,
                        attributes: ['name'],
                        as: 'category',
                    },
                ],
            });
            resolve(products);
        } catch (error) {
            reject(error);
        }
    });
};
//add Product using promise and sequelize
let addProduct = async (product) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (product) {
                let newProduct = await db.Product.create({
                    name: product.name,
                    price: product.price,
                    categoryId: product.categoryId,
                    description: product.description,
                    image: product.image,
                    quantity: product.quantity,
                });
                resolve(newProduct);
            }
            reject('product is required');
        } catch (error) {
            reject(error);
        }
    });
};
let updateProduct = async (product) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (product.id) {
                ///using findOne and update
                let existingProduct = await db.Product.findOne({
                    where: {
                        id: product.id,
                    },
                });
                if (existingProduct) {
                    if (product.name) {
                        existingProduct.name = product.name;
                    }
                    if (product.price) {
                        existingProduct.price = product.price;
                    }
                    if (product.categoryId) {
                        existingProduct.categoryId = product.categoryId;
                    }
                    if (product.description) {
                        existingProduct.description = product.description;
                    }
                    if (product.image) {
                        existingProduct.image = product.image;
                    }
                    if (product.quantity) {
                        existingProduct.quantity = product.quantity;
                    }
                    existingProduct.save();
                    resolve(existingProduct);
                } else {
                    reject('not found');
                }
            } else {
                reject('id is required');
            }
            resolve(updatedProduct);
        } catch (error) {
            reject(error);
        }
    });
};
let deleteProduct = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let product = await db.Product.destroy({
                    where: {
                        id: id,
                    },
                });
                resolve(product);
            } else {
                reject('id is required');
            }
        } catch (error) {
            reject(error);
        }
    });
};
///paginate products return products, page, totalPages, totalProducts
let paginateProducts = async (page, limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (page && limit) {
                let totalProducts = await db.Product.count();
                let totalPages = Math.ceil(totalProducts / limit);
                let products = await db.Product.findAll({
                    limit: limit,
                    offset: (page - 1) * limit,
                    include: [
                        {
                            model: db.Category,
                            attributes: ['name'],
                            as: 'category',
                        },
                    ],
                });
                resolve({ products, page, totalPages, totalProducts });
            } else {
                reject('page and limit are required');
            }
        } catch (error) {
            reject(error);
        }
    });
};
///get product by id
let getProductById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let product = await db.Product.findOne({
                    where: {
                        id: id,
                    },
                    include: [
                        {
                            model: db.Category,
                            attributes: ['name'],
                            as: 'category',
                        },
                    ],
                });
                resolve(product);
            } else {
                reject('id is required');
            }
        } catch (error) {
            reject(error);
        }
    });
};
//export all function
module.exports = {
    getAllProducts: getAllProducts,
    addProduct: addProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
    paginateProducts: paginateProducts,
    getProductById: getProductById,
};
