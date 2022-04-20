const req = require("express/lib/request")
const UserModel= require("../models/userModel")
const ProductModel = require('../models/productModel')
const OrderModel = require('../models/orderModel')


const creatProduct= async function (req, res) {
    let productData = req.body
    let allproduct= await ProductModel.create(productData)
    res.send({msg: allproduct})
}



const createUser = async function (req, res) {
    let data = req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const createOrder = async function (req, res ){
    let OrderData = req.body
    let userIddata = OrderData.userId
    let productIddata =OrderData.productId
    let header = req.headers["isfreeappuser"]

    let userVilidetion = await UserModel.findById(userIddata)
   
    if(!userVilidetion){
        res.send("user id is not vailid")
    }
    let ProductVilidation = await ProductModel.findById(productIddata)
    if(!ProductVilidation){
        res.send("Product id is not vailid")
    }else{
        let createoder = await OrderModel.create(OrderData)
        if(header == true){
            await UserModel.find({_id : userIddata}).update({balance:`${balance}-${ProductVilidation }`},{new:true})
        }
        res.send({success : createoder})
    }

}

module.exports.createOrder = createOrder
module.exports.createUser= createUser
module.exports.creatProduct= creatProduct





// const basicCode= async function(req, res) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)
//     //counter
//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     res.send({ msg: "This is coming from controller (handler)"})
    
//     }


// const createAUser = function(req, res) {
//     let requestBody = req.body
//     let headers  = req.headers
    

//     //Printing all the headers before modification - addition of a new header called 'month'
//     console.log('Request headers are before: ', headers)

//     //Accessing a request header called 'batch'
//     let batchHeader = headers["batch"] // headers.batch 
    
//     ///Accessing a request header called 'content-type'
//     let contentHeader = headers['content-type'] // headers.content-type

//     console.log('Content Type hedser is: ',contentHeader)
//     console.log('Batch header is: ', batchHeader)

//     //Adding a new requets header
//     req.headers["month"] = 'April' //req.headers.month = 'April' or req.headers["month"] = 'April'


//     //Printing the headers after modification - addition of a new header called 'month'
//     console.log('Request headers are after: ', headers)


//     console.log('Request property called current-day', req['current-day'])
    
//     //Adding a response header
//     res.header('year', '2022')

//     res.send('Just create a user')
// }

// module.exports.createAUser = createAUser
// module.exports.basicCode = basicCode

















