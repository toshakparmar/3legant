const jwt = require("jsonwebtoken");

// Ensure Authenticated Middleware by JWT Token
const ensureAuthicated = ( req, res, next ) => {
    const auth = req.headers["authorization"];
    console.log(auth);
    if(!auth) {
        return res.status(403).json({
            message: "Unauthenticated, JWT Token Required",
            success: false
        })
    } 
    try{
        const decordedToken = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decordedToken;
        next();
    }catch(error){
        return res.status(403).json({
            message: "Invalid JWT Token, Unauthenticated",
            success: false
        });
    }
}

module.exports = ensureAuthicated;