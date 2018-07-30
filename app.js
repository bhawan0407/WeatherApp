const request = require('request');
const yargs   = require('yargs');

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

// encodeURIComponent
// decodeURIComponent

var url = `https://maps.googleapis.com/maps/api/geocode/json?address='${encodeURIComponent(argv.address)}`;

var reqOptions = 
{
    url,      // url : url
    json : true
};

request(reqOptions, (error, response, body) => 
{
    //console.log(JSON.stringify(body, undefined, 2));
    console.log(`Address   : ${body.results[0].formatted_address}`);
    console.log(`Latitude  : ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
})
