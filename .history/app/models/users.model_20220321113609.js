const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    email:{type:String, unique:true},
    password:{type:String},
    storage:{type:Number, default:50 * 1024 *1024},
    totalAccumulatedStorage:{type:Number, default:51200}

})

module.exports = mongoose.model("User", userSchema);