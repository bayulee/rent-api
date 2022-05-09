const Room =require("../models/houseSchema")
const bcrypt=require("bcryptjs")
const { string } = require("yup");
//get all houses
const getHouses=(req ,res)=>{
    res.status(200).json(Room)
    
    }
    //create a single house
    const createHouse =(req, res)=>{
        const newHouse=req.body;
        Room.push(newHouse)
        res.status(200).json(Room)
    }
    module.exports={getHouses,createHouse}