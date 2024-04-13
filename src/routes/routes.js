const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { createCategory, getAllCategory, getCategoryById, updateCategory, deleteCategory } = require('../features/categories/controller');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const directory = path.join(__dirname,'..', 'assets', 'data', 'image', 'category');
        
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }
        cb(null, directory);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

//Categories
router.post('/categories', upload.single('image'), createCategory);
router.get('/categories', getAllCategory);
router.get('/categories/:id', getCategoryById);
router.put('/categories/:id', upload.single('image'), updateCategory);
router.delete('/categories/:id', deleteCategory);

module.exports = router;

