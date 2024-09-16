const router = require("express").Router();
const ensureAuthicated = require("../Middlewares/Auth");
const { CreateCategory, GetCategories, GetCategory, DeleteCategory, UpdateCategory } = require("../Controllers/CategoryController");

// Define Category Router

// Get Categories
router.get('/', ensureAuthicated, GetCategories);

// Add Categories
router.post('/create', ensureAuthicated, CreateCategory);

// Get Category
router.get('/:id', ensureAuthicated, GetCategory);

// Update Category
router.put('/:id', ensureAuthicated, UpdateCategory);

// Delete Category
router.delete('/:id', ensureAuthicated, DeleteCategory);

module.exports = router;