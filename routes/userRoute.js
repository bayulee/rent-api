const {Router}=require("express");
const {createUser, loginUser}=require("../controllers/userController")

const router = Router();



//.route("/api/user")
router
.post("/register", createUser)
.post("/login",loginUser)

module.exports=router;