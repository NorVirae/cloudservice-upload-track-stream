const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    email:{type:String, unique:true},
    password:{type:String},
    storage:{type:Number, default:51200},
    totalAccumulatedStorage

})

module.exports = mongoose.model("User", userSchema);