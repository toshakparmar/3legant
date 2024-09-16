const User = require('../Models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const RegisterUser = async (req, res) => {
    try{
        // Get the User Details from body
        const {name, username, email, password} = req.body;

        // Check if User already exists
        const user = await User.findOne({email: email});
        if(user) return res.status(409).json({ message: "User already exists, you can login", success: false });

        // Create New User
        const newUser = new User({
            name: name,
            username: username,
            email: email,
            password: password
        });

        // Hash the User Password and Generate Salt
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);

        // Save the User
        await newUser.save();
        res.status(201).json({ message: "User created successfully", success: true });

    }catch(error){
        res.status(500).json({ message: error.message, success: false });
    }
}

const LoginUser = async (req, res) => {
    try{
        // Get the User Details from body
        const {email, password} = req.body;
        const errorMessage = "Authentication Failed Email or Password is Wrong";

        // Find User in Database
        const user = await User.findOne({email: email});
        if(!user) return res.status(403).json({ message: errorMessage, success: false });

        // Match the Password form Users with Password in Database
        const isMatch = await bcrypt.compare(password, user.password); 
        if(!isMatch) return res.status(403).json({ message: errorMessage, success: false });

        const jwtToken = jwt.sign(
            {id: user._id, email: user.email}, // Payload
            process.env.JWT_SECRET, // Jwt Secret Key
            { expiresIn: '24h' } // Jwt Token Expiry
        );

        res.status(200).json({
            message: "User Login Successfully",
            token: jwtToken,
            success: true,
            email, 
            name: user.name, 
        });

    }catch(error){
        res.status(500).json({ message: error.message, success: false });
    }
}

module.exports = {
    RegisterUser, 
    LoginUser,
}