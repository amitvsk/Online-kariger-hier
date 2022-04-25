const axios = require("axios")

const createMeme = async function(req,res){
    try{
        let FirstT = req.query.text0
        let SeconedT = req.query.text1
        let username = req.query.username
        let password = req.query.password
        let template_id = req.query.template_id

        let options = {
            method : 'post',
            url : `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${FirstT}&text1=${SeconedT}&username=${username}&password=${password}`
        }

     let result = await axios(options)
      return  res.status(200).send({status:true, msg : result.data})
    }
    catch(err){
        console.log(err.message)
        res.status(500).send({msg: err.message})
    }
}

module.exports.createMeme = createMeme