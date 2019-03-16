// this is a test project 
// for git

const request = require('request');

request({
    method: 'GET',
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=J0IaStfFYH3kbf27YV2yLEZkAVXEPe0d&location=sainagar%20pune',
    json: true
}, (error, response, body) => {
    console.log(body);
});