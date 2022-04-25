let axios = require("axios")

const getWeatherCity = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        let cityObjArr = []
        for (i = 0; i < cities.length; i++) {


            let Obj = { city: cities[i] }
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=f9cd7ba829a103056063dd236438222e`
            }
            let result = await axios(options)
            let a = result.data.main.temp
            Obj.temp = a
            cityObjArr.push(Obj)
        }
        let sorted = cityObjArr.sort(function (a, b) { return a.temp - b.temp })

        return res.status(200).send({ msg: sorted })


    }

    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getWeatherCity = getWeatherCity