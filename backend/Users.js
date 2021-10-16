const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    image:{type:String,required:true},
    cart:{type:String,required:true},
})


module.exports = new mongoose.model("users",Schema)