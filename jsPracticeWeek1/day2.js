const nums = [1, 2, 3, 4, 5, 6];

// nums.forEach(n => console.log(n * 2));

const doubled = nums.map(n => n * 2);
// console.log(doubled)

const evens = nums.filter(n => n % 2 === 0);
// console.log(evens);

const sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);



// -------------------------------------------------------------

function filterEvens(arr) {
    const new_arr = arr.filter(a => a % 2 === 0);
    return new_arr;
}

const names = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(filterEvens(names));

function arrAvg(arr) {
    const average = arr.reduce((acc, curr) => acc + curr, 0);
    return average / arr.length;
}

// console.log(arrAvg(names));


// -----------------------------------------------------------


function doubleOdd(arr) {
    const new_arr = arr.filter(a => a % 2 != 0);
    const res = new_arr.map(n => n * 2);
    return res;
}

// console.log(doubleOdd(names))
const people = ["Andrew", "Abby", "Chloe"];

function startsWithA(arr) {
    const res = arr.filter(n => n.charAt(0).toLowerCase() === 'a')
    return res;
}

console.log(startsWithA(people));


// ----------------------------------------------------------------

const prices = [10, 15, 20];

const priceTaxed = prices.map(p => p * 1.10);
console.log("The prices are taxed.\nThe total comes to: " + priceTaxed);

const overhead = .75
const total = priceTaxed.reduce((arr, curr) => arr + (curr * (1 - overhead)), 0);
console.log("The total is: " + total);


// ❓“When do I use .map() vs .forEach()?”
// ❓“What’s the difference between .filter() and .reduce()?”
// ❓“How do I build a function that returns a new array?”

// Then you're golden 💪

// Want a mini quiz next to test your understanding of those differences?