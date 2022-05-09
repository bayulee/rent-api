const {Router} =require("express")
const { getHouses, createHouse } = require("../controllers/houseController")
const router=Router()

router.route("/house").get( getHouses).post(createHouse)

module.exports= router
