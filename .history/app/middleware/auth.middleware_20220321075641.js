const jwt  = require("jsonwebtoken");
const User = require("../models/users.model");



const authticateToken = (req, res, next) => {
    const authToken = req.headers["authorization"]
    console.log(req.headers, authToken)
    if(!authToken) return res.status(403).json({data:"Token not provided"})
    const mainToken = authToken.split(" ")[1]
    jwt.verify(mainToken, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        console.log(user, "LOKO")
    })
    next()
}

const isEmailUnique = (req, res, next) => {
    const emailExist = await User.find
    console.log(req.headers, authToken)
    if(!authToken) return res.status(403).json({data:"Token not provided"})
    const mainToken = authToken.split(" ")[1]
    jwt.verify(mainToken, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        console.log(user, "LOKO")
    })
    next()
}

module.exports = {authticateToken, isEmailUnique}