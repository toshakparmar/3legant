const { RegisterValidation, LoginValidation } = require("../Middlewares/AuthValidation");
const { RegisterUser, LoginUser } = require("../Controllers/AuthController");

// Define Router
const router = require("express").Router();

// Login API
router.post('/login', LoginValidation, LoginUser);

// Register API
router.post('/register', RegisterValidation, RegisterUser);


module.exports = router;