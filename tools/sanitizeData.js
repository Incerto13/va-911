/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const file = fs.readFileSync("./tools/upload/raw_incident.json");
const rawdata = JSON.parse(file);

// Value of json object can't just be a string, must be nested in an object
// All elements must bel objects or arrays of objects
let data = {
  ...rawdata,
  version: {
    version: rawdata.version
  }
};

data = JSON.stringify(data);
const filepath = path.join(__dirname, "data.json");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Raw data has been sanitized.");
});
