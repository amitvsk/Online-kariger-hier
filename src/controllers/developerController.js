const BatchModel= require("../models/batchModel")
const DeveloperModel = require("../models/developerModel")


const createBatch= async function (req, res) {
    let batch = req.body
    let batchCreated = await BatchModel.create(batch)
    res.send({data: batchCreated})
}

const createDeveloper = async function (req, res) {
    let developer = req.body
    let developerCreate = await DeveloperModel.create(developer)
    res.send({msg: developerCreate})
}

const GETscholarship = async function (req, res) {
    let scholarship = await DeveloperModel.find({gender: "female",percentage:{$gte:70}}).populate('batch')
    res.send({data: scholarship})
}

const GETdevelopers = async function (req, res) {
    let query1 = req.query.program
    let query2 = req.query.percentage
    let batchFind = await BatchModel.find({name: query1}).select("_id")
    let developer = await DeveloperModel.find({percentage:{$gte:query2},batch:batchFind}).populate('batch')
    res.send({data: developer})
}

module.exports.GETdevelopers = GETdevelopers

module.exports.GETscholarship = GETscholarship

module.exports.createBatch = createBatch

module.exports.createDeveloper = createDeveloper

