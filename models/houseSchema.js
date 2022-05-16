const mongoose =require("mongoose");
const userSchema= mongoose.Schema({
    gpsAddress:{
        type:String,
        required:true
    },
    landLordName:{
        type:String,
        required:true
    },
    hseLocation:{type:String,required:true},

    hseType:{
        require:true,
        type:String,
        unique:true
    },
    imageOfBuilding:{
        type:String,
        require:true
    },
    note:{
        type:String,
        require:true
    },
    amount:{
        type:String,
        require:true
    }

},{
    timestamps:true
})
const Room=mongoose.model("room", userSchema);
module.exports=Room;