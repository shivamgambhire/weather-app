const request = require("request")

const forecast = (longitude, latitude, callback) => {
    
    const url = "http://api.weatherstack.com/current?access_key=ba628cb8b6c86aa2714cc0d60cc0f49e&query="+ longitude+","+ latitude   //this is api request url and if you want units(tempreture) as f &units=f  add this in last

        request({url: url, json: true}, (error,responce) => {       //request method having two arg error and responce
                if(error){
                    callback('Cannot connect to internet',undefined)
                } else if(responce.body.error){
                    callback('Api Request is Broken',undefined)
                } else{
                    callback(undefined, {
                       temp : responce.body.current.temperature,
                       humidity : responce.body.current.humidity,
                       weather : responce.body.current.weather_descriptions[0], 
                       location : responce.body.location.name
                    })
                }
        })

}

// forecast(17.6599, 75.9064, (err,data) => {            //defining callback function in forecast function calling 
//     console.log('Error ',err)
//     console.log('Data ',data)
// })

module.exports = forecast