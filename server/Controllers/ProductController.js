const Product = require("../Models/Product");
const Category = require("../Models/Category");

const CreateProduct = async (req, res) => {
    try{
        const category = await Category.findById(req.body.category);
        if(!category) return res.status(401).json({error: "Category not found", success: false});

        const newProduct = new Product({
           name: req.body.name,
           description: req.body.description,
           image: req.body.image,
           brand: req.body.brand,
           price: req.body.price,
           category: req.body.category,
           countInStock: req.body.countInStock,
           rating: req.body.rating,
           numReviews: req.body.numReviews,
           isFeatured: req.body.isFeatured,
        });

        const response = await newProduct.save();
        if(!response) return res.status(401).json({error: "Product not created", success: false});

        res.status(200).json({
            product : response,
            success: true
        });
        
    }catch(error){
        res.status(401).json({
            error: error.message,
            success: false,
        })
    }
}

const GetProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        if(!products) return res.status(401).json({error: "Products not found", success: false});
        res.status(200).json({
            products,
            success: true
        });
    }catch(error){
        res.status(401).json({
            error: error.message,
            success: false,
        })
    }
};

const GetProductById = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(401).json({error: "Product not found", success: false});
        res.status(200).json({
            product: product,
            success: true
        });
    }catch(error){
        res.status(401).json({
            error: error.message,   
            success: false,
        });
    }
};

const UpdateProduct = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(401).json({error: "Product not found", success: false});
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedProduct) return res.status(401).json({error: "Product not updated", success: false});
        res.status(200).json({
            product: updatedProduct,
            success: true
        });
    }catch(error){
        res.status(401).json({
            error: error.message,   
            success: false,
        });
    }
};

const DeleteProduct = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(401).json({error: "Product not found", success: false});
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if(!deletedProduct) return res.status(401).json({error: "Product not deleted", success: false});
        res.status(200).json({
            product: "Product deleted successfully",
            success: true
        }); 
    }catch(error){
        res.status(401).json({
            error: error.message,   
            success: false,
        });
    }
};

const SortBy = async (req, res) => {
    const sortByDirection = req.query.sortBy || "asc";
    try{
        const products = await Product.find().sort({ dateCreated: sortByDirection === "asc" ? 1 : -1}); 
        if(!products) return res.status(401).json({error: "Products not found", success: false});
        res.status(200).json({
            products: products,
            success: true
        });
    }catch(error){
        res.status(401).json({
            error: error.message,   
            success: false,
        });
    }   
};

const SortByCategory = async (req, res) => {
    const sortByCategory = req.query.sortByCategory || null;
    try{
        const products = await Product.find().sort({Category: sortByCategory === null ? 1 : -1});
        if(!products) return res.status(401).json({error: "Products not found", success: false});
        res.status(200).json({
            products: products,
            success: true
        });
    }catch(error){
        res.status(401).json({
            error: error.message,   
            success: false,
        });
    }   
};

const SortByPrice = async (req, res) => {
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    try{
        const products = await Product.find().sort({price: 1}).where('price').gte(minPrice).lte(maxPrice); 
        if(!products) return res.status(401).json({error: "Products not found", success: false});
        res.status(200).json({
            products: products,
            success: true
        });
    }catch(error){
        res.status(401).json({
            error: error.message,   
            success: false,
        });
    }   
};

module.exports = {
    CreateProduct,
    GetProducts,
    GetProductById,
    UpdateProduct,
    DeleteProduct,
    SortBy,
    SortByCategory,
    SortByPrice,
};