const prisma = require('../../configs/config');
// const dotenv = require("dotenv");
// dotenv.config();


// const createCategory = async (req, res, next) => {
//     try {
//         const { name } = req.body;
//         let image = null;

//         if (req.file) {
//             image = `${process.env.BASE_URL}/assets/data/image/category/${req.file.filename}`;
//         }

//         const category = await prisma.category.create({
//             data: {
//                 name,
//                 image
//             }
//         });

//         res.status(201).json({
//             status: true,
//             message: "Category created",
//             data: category
//         });
//     } catch (error) {
//         next(error);
//     }
// };

const createCategory = async(req, res, next) => {
    try {
        const {name, image} = req.body;

        const category = await prisma.category.create({
            data: {
                name,
                image
            }
        });

        res.status(201).json({
            status: true,
            message: "Category created",
            data: category
        });
    } catch (error) {
        next(error);
    }
}

const getAllCategory = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;

        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;

        const categories = await prisma.category.findMany({
            skip: startIndex,
            take: pageSize,
        });

        const totalCategories = await prisma.category.count();

        const totalPages = Math.ceil(totalCategories / pageSize);

        res.status(200).json({
            status: true,
            message: "Categories found",
            data: categories,
            pagination: {
                currentPage: page,
                pageSize: pageSize,
                totalCategories: totalCategories,
                totalPages: totalPages
            }
        });
    } catch (error) {
        next(error);
    }
};


const getCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await prisma.category.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        if (!category) {
            return res.status(404).json({
                status: false,
                message: "Category not found"
            });
        }

        res.status(200).json({
            status: true,
            message: "Category found",
            data: category
        });
    } catch (error) {
        next(error);
    }
}

// const updateCategory = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const { name } = req.body;
//         let image = null;

//         if (req.file) {
//             image = `http://localhost:3000/assets/data/image/category/${req.file.filename}`;
//         }

//         const category = await prisma.category.update({
//             where: {
//                 id: parseInt(id)
//             },
//             data: {
//                 name,
//                 image
//             }
//         });

//         res.status(200).json({
//             status: true,
//             message: "Category updated",
//             data: category
//         });
//     } catch (error) {
//         next(error);
//     }
// };

const updateCategory = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {name, image} = req.body;

        const category = await prisma.category.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name,
                image
            }
        });

        res.status(200).json({
            status: true,
            message: "Category updated",
            data: category
        });
    } catch (error) {
        next(error);
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const {id} = req.params;

        const category = await prisma.category.delete({
            where: {
                id: parseInt(id)
            }
        });

        if (!category) {
            return res.status(404).json({
                status: false,
                message: "Category not found"
            });
        }

        res.status(200).json({
            status: true,
            message: "Category deleted",
            data: null
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createCategory,
    getAllCategory,
    getCategoryById, 
    updateCategory,
    deleteCategory
};