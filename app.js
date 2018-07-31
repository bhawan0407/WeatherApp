const yargs   = require('yargs');
const geocode = require('./geocode/geocode');

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


geocode.geocodeAddress(argv.address);

// encodeURIComponent
// decodeURIComponent


