const request = require("request")


//const url1 = "http://api.weatherstack.com/current?access_key=ba628cb8b6c86aa2714cc0d60cc0f49e&query=17.6599,75.9064&units=f"   //this is api request url and we are providing units(tempreture) as f
// const url = "http://api.weatherstack.com/current?access_key=ba628cb8b6c86aa2714cc0d60cc0f49e&query="   //this is api request url


// request({url: url, json:true} , (err, resp) => {           // request method is used to request the api setting the url, json is true bcz  ...
    
//     if(err){
//         //console.log(err)                      //err this will print all error logs but error logs are from api request
//         console.log("Sorry Api Request Not Found..!!")
//     }else if(resp.body.error){
//         console.log("Opps Wrong Input...!!! "+resp.body.error.info)     //if the api request is broken or empty then this block will execute
//     }else{
//         const date = resp.body.location.localtime       //getting local date & time and cut it in ext
//         const today = date.split(" ")[0]            //i am just cut the string and store it
    
//         console.log(`Today ${today} is ${resp.body.current.temperature} Degree Temp and Humidity is ${resp.body.current.humidity} `)
//         console.log("and its " + resp.body.current.weather_descriptions[0])     //weather_descriptions is array so fetch with its index
    
//     }
    
    
    //console.log(resp.body.current)            //we are not converting the json string into JS object bcz we are giving the json attribute as true in request method
    
    // const data = JSON.parse(resp.body)       // we are converting the string into JS object and set to data
    // console.log(data.current)                // here we are getting one of attribute of api data that is current, we are not using this bcz we are now setting json as true in request method
//})




// //mapbox geocoding we are getting the cordinates using provideing the name of any city in api request

const geocoding = "https://api.mapbox.com/geocoding/v5/mapbox.places/solapur.json?access_token=pk.eyJ1Ijoic2hpdmFtZ2FtYmhpcmUiLCJhIjoiY2wwcWV2N3RxMDAzbDNjcXJyazNsNmV3eCJ9.BBo4SK6yoEbJnqtYCXC31w&limit=1"

request({url: geocoding, json: true} , (error,responce) => {
    
    if(error){
        console.log(error)                  //this will print entir error logs
    }else if(responce.body.features.length === 0){      //this will print if api request link is broken or what we access is not proper name
        console.log("Opps Api link is broken")
    }
    else{
        const longitude = responce.body.features[0].center[0]       //responce is attribute from api we are using it to interact with api
        const latitude = responce.body.features[0].center[1]        //body is where all data is located and feature is one of data from api, here feature is array bcz we are using []
        console.log(`logitude is ${longitude} and latitude is ${latitude}`)
        
        const cordinates1 = responce.body.features[0].geometry.coordinates[0]
        const cordinates2 = responce.body.features[0].geometry.coordinates[1]
        console.log("Coordinates " , cordinates1,cordinates2)
    }

})