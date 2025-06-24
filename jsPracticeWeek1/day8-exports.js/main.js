import PI, {add, mult} from "./mathUtils.js";

const radius = 5;
const area = PI * mult(radius, radius);

// console.log("Circle area:", area);
// console.log("Add 3 + 4 =", add(3, 4));

// ---------------------------------------------

import { calculateCompoundInterest, calculateTax, formatCurrency } from "./financeutils.js";


const income = 80000;
const tax = calculateTax(income, 0.22);
const futureValue = calculateCompoundInterest(10000, 0.05, 20);

console.log("Annual tax:", formatCurrency(tax));
console.log("Total investment value in 20 years:", formatCurrency(futureValue));