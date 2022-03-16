const request = require("request")

const geocode = (address, callback) => {        //first is attribure and 2nd is callback function which is being called from inside 
    
                                                                    // encodeURIComponent()  method encodes a URI component.
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) +".json?access_token=pk.eyJ1Ijoic2hpdmFtZ2FtYmhpcmUiLCJhIjoiY2wwcWV2N3RxMDAzbDNjcXJyazNsNmV3eCJ9.BBo4SK6yoEbJnqtYCXC31w&limit=1"

    request({url: url , json: true}, (error, responce) => {      //request method having two arg error and responce
        if(error){
            callback('Connection is not established', undefined)     //here we are calling callback function which is declared in geocode's calling function in bottom
        }                                                           // we can print directly output here also using consol but for flexible and reusablity we are calling callback function
        else if(responce.body.features.length === 0){                
            callback('Oops either Api Request is broken or location is not correct', undefined)     //callback is defined in bottom geocode function where geocode is calling 
        }
        else{
            callback(undefined, {
                longitude : responce.body.features[0].center[0],       //responce is attribute from api we are using it to interact with api
                latitude : responce.body.features[0].center[1],        //body is where all data is located and feature is one of data from api, here feature is array bcz we are using []
                location : responce.body.features[0].place_name
            })
        }
    })
}


//calling this function is from app.js file  if you want to run this we can uncomment and run it
// geocode('solapur', (err, data) => {             //first arg is url address second is function callback here the function body is declared written
//     console.log('Error ',err)                   //if anywhere callback function is called then this function is called and perform action
//     console.log('Data ',data)                                            
// })

module.exports = geocode                    //exporting the function