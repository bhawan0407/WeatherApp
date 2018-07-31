const yargs   = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
            .options
            ({
                a : 
                {
                    demand   : true,
                    describe : 'Address to fetch weather',
                    alias    : 'address',
                    string   : true
                }
            })
            .help()
            .alias('help', 'h')
            .argv;


geocode.geocodeAddress(argv.address, (error, results) =>
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results.address);
 
        var latitude  = results.latitude;
        var longitude = results.longitude;
        
        weather.getWeather(latitude, longitude, (error, weatherResults) => 
        {
            if(error)
            {
                console.log(err);
            }
            else
            {
                console.log(JSON.stringify(weatherResults, undefined, 2));
                //console.log(`It's currently ${weatherResults.temperature}`);
                //console.log(`It feels like ${weatherResults.apparentTemperature}`)
            }
        });
        //console.log(JSON.stringify(results, undefined, 2));
    }
});



