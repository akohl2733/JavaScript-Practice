
const income = 5000;
let expenses = [];

expenses.push({description: "Car Payment", amount: 1400});
expenses.push({description: "Rent", amount: 4000});
expenses.push({description: "Student Loans", amount: 300});

let expensetotal = 0;

for (let i=0; i<expenses.length; i++){
    expensetotal += expenses[i].amount;
}

console.log(`\nHere is your total monthly budget\nIncome: $${income}`);
console.log("Your expenses for the month were as follows");

for (let expense of expenses){
    console.log(`- ${expense.description} -- ${expense.amount}`);
}

if (expensetotal > income){
    console.log("\nYou are a complete bone\nAnd are most likely cooked");
}
