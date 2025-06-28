//schema 
let mongoose= require("mongoose")
let  userSchema=  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }

})

let models= mongoose.model("kushal_cruds", userSchema)

module.exports=models;
