function greet(name){
    return "Hello, " + name;
}

const greetArrow = (name) => "Hello, " + name;

// console.log(greet("Andrew"));
// console.log(greetArrow("Abby"));


// ------------------------------------

function isEven(num){
    return num % 2 === 0;
}

const evenArrow = (n) => n % 2 === 0;

// console.log(evenArrow(5));
// console.log(isEven(8));


// ---------------------------------


const nums = [0, 1, 2, 3, 4, 5];

// nums.forEach((x) => console.log(x * 2));
const doubled = nums.map((num) => num > 3);
const evens = nums.filter((num) => num % 2 === 0);
const avg = nums.reduce((arr, curr) => arr + curr, 0) / nums.length;

// console.log({ doubled, evens, avg })


// -----------------------------------

function outer(){
    let counter = 0
    return function inner(){
        counter += 1
        return counter;
    }
}

const count = outer()
// console.log(count());
// console.log(count());

// ---------------------------


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 4, 3, 2, 1];

const arr3 = [...arr1, ...arr2];
// console.log("New array: ", arr3);

const obj1 = {
    name: "Andrew",
    age: 24
}
const obj2 = {
    name: "Abby",
    career: "nurse"
}

const obj3 = {...obj1, ...obj2};
// console.log("Object 3", obj3)


function returnArray(...args){
    const arr = [];
    for (let arg of args){
        arr.push(arg);
    }
    return arr;
}

// console.log(returnArray("Andrew", "Chloe", "Zeke", 13))


// -----------------------------------------------

const fakeFetch = () =>
    new Promise((res) => setTimeout(() => res("Data loaded!"), 1000));

async function loadData(){
    const data = await fakeFetch()
    console.log(data);
}

loadData();