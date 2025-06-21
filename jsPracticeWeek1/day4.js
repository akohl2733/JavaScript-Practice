function calcSquare(x){
    return x**2;
}

num = 5

const sq = (x) => x**2;

// console.log(calcSquare(5));
// console.log(sq(num));

// ---------------------------------

function greetName(name) {
    return "Hello " + name;
}

const greeter = (n) => "Hello " + n;

// console.log(greetName("Andrew"));
// console.log(greeter("Abby"));



// ----------------------------------


function isEven(num) {
    if (num % 2 === 0){
        return `${num} is even`;
    } else {
        return `${num} is not even`;
    }
}

// const evenCheck = (x) => {
//     if (x % 2 === 0){
//         return `${x} is even`;
//     } else {
//         return `${x} is not even`;
//     }
// }

const evenCheck = (x) => `${x} is ${x % 2 === 0 ? "even" : "odd"}`

// console.log(isEven(10));
// console.log(evenCheck(11));


// -----------------------------------


function arraySum(arr) {
    const total = arr.reduce((a, curr) => a + curr, 0);
    return total;
}

nums = [1, 2, 3, 4, 5];

const t = nums.reduce((ag, curr) => ag + curr, 0);

// console.log(arraySum(nums));
// console.log(t);


// ---------------------------------------------------


function addOne(count = 10) {
    return count += 1;
}

const adder = (x = 10) => x + 1;

// console.log(addOne());
// console.log(addOne(11));
// console.log(adder());
// console.log(adder(12));

// ------------------------------------


function greetUser(name = "stranger"){
    return `Hello, ${name}!`;
}

const user = (n = "stranger") => `Hello, ${n}`;

// console.log(greetUser());
// console.log(user("Abby"));

// --------------------------------------------

function calcTip(total, tipPercent = .15){
    return total * (1 + tipPercent);
}

const tipper = (t, per = 0.15) => t * (1+per);

// console.log("Your total is " + calcTip(100));
// console.log("Your total is " + tipper(50, 0.2));


// -----------------------------------------------

function maxOfThree(a, b, c) {
    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
        return Math.max(a, b, c);
    } 
    return "Please input 3 numbers";
}

const maxxer = (a, b, c) => {
    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
        return Math.max(a, b, c);
    } 
    return "Please input 3 numbers";
}

// console.log(maxOfThree(10, 5, 8));
// console.log(maxxer("Andrew", 10, 5));


// --------------------------------------------------------


function isPalindrome(s) {
    let charArray = s.split('')
    if (s === charArray.reverse().join('')){
        return true;
    }
    return false;
}

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("Andrew"));