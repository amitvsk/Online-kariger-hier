const AuthorModel= require("../models/authorModel")
const PublisherModel = require("../models/bookPublisher")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const createPublisher = async function (req, res) {
    let public = req.body
    let publisher = await PublisherModel.create(public)
    res.send({msg: publisher})
}


module.exports.createAuthor= createAuthor

module.exports.createPublisher = createPublisher