console.log("Hello from Node.js");
const fs = require('fs');

fs.writeFileSync("output.txt", "This file was created by Node.js");

console.log("Check output.txt in this folder");