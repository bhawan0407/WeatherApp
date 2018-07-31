const request = require('request');

const API_KEY = '5ea0924e4dda2c0320b5e76ebd4767f0';

var getWeather = (latitude, longitude, callback) =>
{
    var reqOptions = 
    {
        url  : `https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude}`,
        json : true 
    };

    request(reqOptions, (error, response, body) =>
    {
        if(error)
        {
            callback('Unable to connect to fetch weather API');
        }
        else if(response.statusCode === 400)
        {
            callback("Unable to fetch weather");
        }
        else if(response.statusCode === 200)
        {
            callback(null, body.currently.temperature);
        }
    });
}

module.exports.getWeather = getWeather;
