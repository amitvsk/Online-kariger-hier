const mid1= async function( req, res, next) {
     let check = req.headers.isfreeappuser
        
    if(check == "true") {
        next()
    }else{
        res.send('The request is missing a mandatory header')
    }
     
 }

 module.exports.mid1 = mid1