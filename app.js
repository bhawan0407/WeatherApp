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
        var latitude  = results.latitude;
        var longitude = results.longitude;
        
        weather.getWeather(latitude, longitude, (err, res) => 
        {
            if(error)
            {
                console.log(err);
            }
            else
            {
                console.log(res);
            }
        });
        //console.log(JSON.stringify(results, undefined, 2));
    }
});



