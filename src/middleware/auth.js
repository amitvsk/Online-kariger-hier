const jwt = require("jsonwebtoken");


const mid = async function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
       
    let decodedToken = jwt.verify(token, "functionup-urainum");
    if (!decodedToken){
      return res.send({ status: false, msg:"token is invalid",userData });
    }else{
        console.log ("Token is verify")
    }
    next()
}

module.exports.mid = mid
