const Category  = require("../Models/Category");

const CreateCategory = async (req, res) => {
    try{
        console.log(req.body);
        const newCategory = new Category({
            name: req.body.name,
            slug: req.body.slug
        });
        const response = await newCategory.save();
        res.status(200).json({
            category : response,
            success: true
        });
    }catch(error){
        res.status(401).json({
            error: error.message,
            success: false,
        });
    }
};

const GetCategories = async (req, res) => {
    try{
        const categories = await Category.find();
        res.status(200).json({
            categories : categories,
            success: true
        });
    }catch(error){
        res.status(401).json({
            error: error.message,
            success: false,
        });
    }       
};

const GetCategory = async (req, res) => {
    try{
        const category = await Category.findById(req.params.id);
        if(!category){
            res.status(401).json({
                message: "Category Not Found",
                success: false
            });
        }
        res.status(200).json({
            category : category,
            success: true
        });
    }catch(error){
        res.status(401).json({
            error: error.message,
            success: false,
        });
    }
};

const UpdateCategory = async (req, res) => {
    try{
        const category = await Category.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            slug: req.body.slug,
        },{ new : true });
        if(!category){
            res.status(401).json({
                message: "Category Not Found",
                success: false
            });
        }
        res.status(200).json({
            category : category,
            success: true
        });
    }catch(error){
        res.status(401).json({
            error: error.message,
            success: false,
        });
    }
}

const DeleteCategory = async (req, res) => {
    try{
        await Category.findByIdAndDelete(req.params.id).then((response) => {
            if(response){
                console.log("Category Deleted Successfully");
                res.status(200).json({
                    message: "Category Deleted Successfully",
                    success: true
                });
            }else{
                console.log("Category Not Found");
                res.status(401).json({
                    message: "Category Not Found",
                    success: false
                });
            }
        });
    }catch(error){  
        res.status(401).json({
            error: error.message,
            success: false,
        });
    }
};

module.exports = {
    CreateCategory, 
    GetCategories,
    UpdateCategory,
    DeleteCategory,
    GetCategory,
};