const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true})

module.exports=mongoose.model("User",userSchema) //User is table name and you pass userSchema to