const mongoose =require("mongoose");
const { string } = require("yup");
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
  
    password:{
        type:String,
        require:true
    }

},{
    timestamps:true
})
const User=mongoose.model("user", userSchema);
module.exports=User;