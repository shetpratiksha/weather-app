const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
// const url = "https://api.darksky.net/forecast/183b3cdd947179f462055e745fdd9646/37.8267,-122.4233";

// request({url:url},(error, response) =>{
//     //var data = JSON.parse(response.body);
//     //console.log(data);

//     //console.log('It is currently '+data.currently.temperature+' degrees out. There is a '+data.currently.precipProbability+'% chance of rain.');
// })


// const mapURL ="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHJhdGlrc2hhLXNoZXQiLCJhIjoiY2s2ZGoyNnp6MW5kNjNocWJ4OWwyODRreiJ9.PUEVRkAhZDMIUy1lLZTOiQ";
// request({url:mapURL, json: true},(error, response) =>{
//     if(error){
//         console.log('Unable to connect to geolocation services!');
//     }
//     else if(response.body.features.length === 0){
//         console.log('Incorrect location given in the input search');
//     }
//     else{
//         var longitude = response.body.features[0].center[0];
//         var latitude = response.body.features[0].center[1];
//         console.log(longitude +' '+latitude);
//     }
    
// })


geocode('United States',(error, data) => {
    if(error){
        return console.log(error);
    }

    
    forecast(data.longitude, data.latitude, (error, forecastData) => {
        if(error){
            return console.log(error);
        }

        console.log('Location: '+data.place_name);
        console.log('Forecast data: '+forecastData);
    })
});


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

