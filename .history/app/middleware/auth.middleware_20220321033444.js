const jwt  = require("jsonwebtoken");



const authticateToken = (req, res, next) => {
    const authToken = req.headers["Authorization"]
    if(!authToken) return res.status(403).json({data:"Token not provided"})
    jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        
    })
}