import db from '../models/index';

//get all chinhanh from database using sequelize and promise
let getAllchinhanh = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let chinhanh = await db.ChiNhanh.findAll();
            resolve(chinhanh);
        } catch (error) {
            reject(error);
        }
    });
};
//add Product using promise and sequelize
let addchinhanh = async (chinhanh) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (chinhanh) {
                let newchinhanh = await db.ChiNhanh.create({
                    name: chinhanh.name,
                    email: chinhanh.email,
                    address: chinhanh.address,
                    phone: chinhanh.phone,
                });
                resolve(newchinhanh);
            }
            reject('chinhanh is required');
        } catch (error) {
            reject(error);
        }
    });
};
let updatechinhanh = async (chinhanh) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (chinhanh.id) {
                let updatedchinhanh = await db.ChiNhanh.update(
                    {
                        name: chinhanh.name,
                        email: chinhanh.email,
                        address: chinhanh.address,
                        phone: chinhanh.phone,
                    },
                    {
                        where: {
                            id: chinhanh.id,
                        },
                    },
                );
                resolve(updatedchinhanh);
            } else {
                reject('id is required');
            }
            resolve(updatedchinhanh);
        } catch (error) {
            reject(error);
        }
    });
};
let deletechinhanh = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let chinhanh = await db.ChiNhanh.destroy({
                    where: {
                        id: id,
                    },
                });
                resolve(chinhanh);
            } else {
                reject('id is required');
            }
        } catch (error) {
            reject(error);
        }
    });
};
///paginate chinhanh return chinhanh, page, totalPages, totalchinhanh
let paginatechinhanh = async (page, limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (page && limit) {
                let totalchinhanh = await db.ChiNhanh.count();
                let totalPages = Math.ceil(totalchinhanh / limit);
                let chinhanhs = await db.chinhanh.findAll({
                    limit: limit,
                    offset: (page - 1) * limit,
                });
                resolve({ chinhanhs, page, totalPages, totalchinhanh });
            } else {
                reject('page and limit are required');
            }
        } catch (error) {
            reject(error);
        }
    });
};
///get product by id
let getchinhanhById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id) {
                let chinhanh = await db.ChiNhanh.findOne({
                    where: {
                        id: id,
                    },
                });
                resolve(chinhanh);
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
    getAllchinhanh: getAllchinhanh,
    addchinhanh: addchinhanh,
    updatechinhanh: updatechinhanh,
    deletechinhanh: deletechinhanh,
    paginatechinhanh: paginatechinhanh,
    getchinhanhById: getchinhanhById,
};
