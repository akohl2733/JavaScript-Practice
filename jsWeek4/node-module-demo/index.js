// const math = require('./math');   --    This is needed if not using "type": "module" in package.json
import { add, multiply } from "./math.js";  // .js is not assumed in ESModules

console.log("2 + 3 =", add(2, 3));
console.log("2 + 3 =", multiply(2, 3));