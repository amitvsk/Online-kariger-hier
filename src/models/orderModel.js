const mongoose = require('mongoose');
const moment = require('moment')
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema( {
    userId: {
       type:ObjectId,
       ref: "UserDocument"
    },
	productId: {
        type:ObjectId,
        ref: "Productlist"
    },
	amount: Number,
	isFreeAppUser:Boolean, 
	date:{
        type: String,
        default: moment().format("DD/MM/YYYY")
    }

},{timestamps : true});

module.exports = mongoose.model('orderlist', orderSchema) 