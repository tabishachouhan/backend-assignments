const fs = require("fs");
const path = require("path");

function readDataFile() {
  const filePath = path.join(__dirname, "Data.txt");
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (error) {
    return "Error reading file!";
  }
}

module.exports = readDataFile;
