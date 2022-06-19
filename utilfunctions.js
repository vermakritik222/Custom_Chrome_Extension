const util = require("util");
const fs = require("fs");

const readFile = util.promisify(fs.readFile);

exports.WriteFile = (filename, data) => {
  fs.writeFile(filename, data, "utf8", function (err) {
    if (err) {
      console.log(
        `An error occured while writing JSON Object to File ${filename}.`
      );
      return console.log(err);
    }
    console.log("JSON file has been saved.");
  });
};

exports.ReadFile = () => {
  return readFile("data/logger.json");
};
