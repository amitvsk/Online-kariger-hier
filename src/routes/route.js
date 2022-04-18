const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")


router.post("/createAuthor", authorController.createAuthor  )

router.post("/createPublisher", authorController.createPublisher)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.put("/putBooksUpdate",bookController.putBooksUpdate)

router.put("/putAthorRatingUP",bookController.putAthorRatingUP)


module.exports = router;