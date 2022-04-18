const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publishModel = require("../models/bookPublisher")

const createBook= async function (req, res) {
    let book = req.body
    

    if(book.author && book.publisher) {

        if(book.author == "625b676cee3cba436e92d11b" && book.publisher == "625867832fdd9540a5b03243") {
            
            let bookCreated = await bookModel.create(book)
            res.send({data: bookCreated})
        }else{
            res.send("The Author and Publisher are not present")
        }
    }else {
        res.send("This detail is required")
    }
}   

const getBooksData= async function (req, res) {
    let  booksDetails = await bookModel.find().populate("author").populate("publisher")
    res.send({data: booksDetails})
}

const putBooksUpdate = async function (req, res) {
    
    let check = await publishModel.find({$nd : [{name : {$eq : "HarperCollin"}},{name : {$eq : "Penguin"}}]}).select({_id:1})
    let check1 = null
    for ( let i = 0; i<check.length; i++){
            check1 = check[i]._id
         let updateBook  = await bookModel.updateMany({publisher : check1}, {$ind: {isHardcover: true }})
            res.send({msg : updateBook})
    }

}

const putAthorRatingUP = async function (req, res){
        let check = await authorModel.find({rating : {$gt : 3.5}}).select('_id')
        let updatePrice = await bookModel.updateMany({author : check}, {$set: {price : 10}}, {new : true , upsert : true})
        res.send({msg : updatePrice})
    
}

module.exports.putAthorRatingUP = putAthorRatingUP
module.exports.putBooksUpdate = putBooksUpdate 
module.exports.createBook = createBook
module.exports.getBooksData= getBooksData

