const request = require('request');
const fs = require("fs");
const website = process.argv.slice(2);

request(website[0], (error, response, body) => {
  fs.writeFile(website[1], body, function (err) {
    if(err) throw err;
    console.log(`Downloaded and saved ${Buffer.byteLength(body)} bytes to ${website[1]}`);
  }); 

});
