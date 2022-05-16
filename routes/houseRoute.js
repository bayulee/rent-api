const {Router} =require("express")
const { getHouses, createHouse } = require("../controllers/houseController")
const router=Router()

router.route("/house").post(createHouse).get( getHouses)

module.exports= router
