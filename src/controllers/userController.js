const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Urainum",
      organisation: "FUnctionUp",
    },
    "functionup-urainum"  
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: "login is successful",token });
};


const getUserData = async function (req, res) {

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);

  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
  res.send({status:true,msg:userDetails});

};



const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: user, data: updatedUser });
};

const deleteUser = async function (req, res) {
    let userId = req.params.userId;
    let user = await userModel.findById(userId)
    if(!user){
      res.send("User is not Vailid")
    }
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId },{isDeleted:true});

    res.send({status:true,msg:updatedUser})
}

module.exports.deleteUser = deleteUser
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;





   // TA sugetion
    // req["userId"]=decodedToken.userId
    // const id = req.userId
    // if(id != userId){  userId getting from params body query
    //     return res.send("user id not othrised");
    // }

//   let userId = req.params.userId;
//   let userDetails = await userModel.findById(userId);
//   if (!userDetails)
//  
 //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response

// Do the same steps here:
// Check if the token is present
// Check if the token present is a valid token
// Return a different error message in both these cases

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens