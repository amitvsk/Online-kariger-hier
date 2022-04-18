const express = require('express');
const router = express.Router();

const developerController = require("../controllers/developerController")


router.post("/createBatch", developerController.createBatch  )

router.post("/createDeveloper", developerController.createDeveloper)

router.get("/scholarship-developers",developerController.GETscholarship)

router.get("/GETdevelopers",developerController.GETdevelopers)


module.exports = router;