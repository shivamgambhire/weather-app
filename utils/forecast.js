//this forecast is used for getting the current weather conditions of the location.

const request = require("request")

const forecast = (latitude,longitude, callback) => {       //1st and 2nd attribute, third attribute is callback function passing
    
    const url = "http://api.weatherstack.com/current?access_key=ba628cb8b6c86aa2714cc0d60cc0f49e&query="+ latitude+","+ longitude   //this is api request url and if you want units(tempreture) as f &units=f  add this in last

        request({url: url, json: true}, (error,responce) => {       //request method having two arg error and responce
                if(error){
                    callback('Cannot connect to internet',undefined)        // calling callback function 
                } else if(responce.body.error){
                    callback('Api Request is Broken',undefined)             // calling callback function 
                } else{
                    callback(undefined, {                                   // calling callback function and passing st as undefined and 2nd as object
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

module.exports = forecast       //exporting the function