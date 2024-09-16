const ensureAuthicated = require("../Middlewares/Auth");
const { CreateProduct, GetProducts, GetProductById, UpdateProduct, DeleteProduct, SortBy, SortByCategory, SortByPrice } = require("../Controllers/ProductController");

// Define Router
const router = require("express").Router();

// Define Product Router
// Add Products
router.post('/create', ensureAuthicated, CreateProduct);

// Get Products.
router.get('/', ensureAuthicated, GetProducts);

// Get Product By Id
router.get('/:id', ensureAuthicated, GetProductById);

// Update Product
router.put('/:id', ensureAuthicated, UpdateProduct);

// Delete Product
router.delete('/:id', ensureAuthicated, DeleteProduct);

// Sort Products
router.get('/sortBy', ensureAuthicated, SortBy);
router.get('/sortByCategory', ensureAuthicated, SortByCategory);
router.get('/sortByPrice', ensureAuthicated, SortByPrice);

module.exports = router;