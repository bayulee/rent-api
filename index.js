const express=require("express");
const morgan = require("morgan");
const connectDB=require("./config/connectDB")
require("dotenv").config();
const userRoute =require("./routes/userRoute")
const houseRoute=require("./routes/houseRoute")



const app=express()
connectDB()
//middleware
app.use(express.json())
app.use(morgan("dev"))
app.use("/api/users", userRoute)
app.use("/api/house", houseRoute)

const PORT= process.env.PORT||9000;

//route
app.get("/",(req,res)=>{
res.json("this is my rent management server!!")
})


app.listen(PORT,()=>{
    console.log("server is active")
})