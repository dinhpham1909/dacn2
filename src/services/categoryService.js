import db from '../models/index';

//get all category from database using sequelize and promise
let getAllCategory = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = await db.Category.findAll();
            resolve(category);
        } catch (error) {
            reject(error);
        }
    });
};
//add Product using promise and sequelize
let addCategory = async (category) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (category) {
                let newCategory = await db.Category.create({
                    name: category.name,
                    price: category.price,
                    categoryId: category.categoryId,
                    description: category.description,
                    image: category.image,
                    quantity: category.quantity,
                });
                resolve(newCategory);
            }
            reject('category is required');
        } catch (error) {
            reject(error);
        }
    });
};
let updateCategory = async (category) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (category.id) {
                let updatedCategory = await db.Category.update(
                    {
                        name: category.name,
                        price: category.price,
                        categoryId: category.categoryId,
                        description: category.description,
                        image: category.image,
                        quantity: category.quantity,
                    },
                    {
                        where: {
                            id: category.id,
                        },
                    },
                );
                resolve(updatedCategory);
            } else {
                reject('id is required');
            }
            resolve(updatedCategory);
        } catch (error) {
            reject(error);
        }
    });
};
let deleteCategory = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let category = await db.Category.destroy({
                    where: {
                        id: id,
                    },
                });
                resolve(category);
            } else {
                reject('id is required');
            }
        } catch (error) {
            reject(error);
        }
    });
};
///paginate category return category, page, totalPages, totalcategory
let paginateCategory = async (page, limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (page && limit) {
                let totalCategory = await db.Category.count();
                let totalPages = Math.ceil(totalCategory / limit);
                let categorys = await db.Category.findAll({
                    limit: limit,
                    offset: (page - 1) * limit,
                });
                resolve({ categorys, page, totalPages, totalCategory });
            } else {
                reject('page and limit are required');
            }
        } catch (error) {
            reject(error);
        }
    });
};
///get product by id
let getCategoryById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let category = await db.Category.findOne({
                    where: {
                        id: id,
                    },
                });
                resolve(category);
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
    getAllCategory: getAllCategory,
    addCategory: addCategory,
    updateCategory: updateCategory,
    deleteCategory: deleteCategory,
    paginateCategory: paginateCategory,
    getCategoryById: getCategoryById,
};
