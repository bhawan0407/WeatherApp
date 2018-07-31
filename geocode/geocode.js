const request = require('request');

// encodeURIComponent
// decodeURIComponent

var geocodeAddress = (address, callback) =>
{
    var encodedAddress = encodeURIComponent(address);
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address='${encodedAddress}`;

    var reqOptions = 
    {
        url,      // url : url
        json : true
    };

    request(reqOptions, (error, response, body) => 
    {
        if(error)
        {
            callback("Unable to connect to Google Server");
        }
        else if(body.status === 'ZERO_RESULTS')
        {
            callback('Unable to find the address');
        }
        else if(body.status === 'OK')
        {
            callback(null, 
            {
                address : 
                body.results[0].formatted_address,
                
                latitude :
                body.results[0].geometry.location.lat ,
                
                longitude : 
                body.results[0].geometry.location.lng
            });
        }
    })
}


module.exports = 
{
    geocodeAddress
};
