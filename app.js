const request = require('request');

var reqOptions = 
{
    url  :  "https://maps.googleapis.com/maps/api/geocode/json?address=Sangrur%20Punjab",
    json : true
};

request(reqOptions, (error, response, body) => 
{
    //console.log(JSON.stringify(body, undefined, 2));
    console.log(`Latitude  ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude ${body.results[0].geometry.location.lng}`);
})
