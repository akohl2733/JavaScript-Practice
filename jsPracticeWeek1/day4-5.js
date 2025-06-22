// Deconstructing Basics

const person = {
    name: "Andrew",
    role: "Admin",
    age: 25
};

const { name, role } = person;
// console.log(name);

const nums = [10, 20, 30];
const [first, , third] = nums;
// console.log(third);

const numbers = (x, y) => `X is ${x} and Y is ${y}`;
// console.log(numbers(5, 10));


// ------------------------------------------------
// Spread & Rest Operators


const arr1 = [1, 2, 4];
const arr2 = [...arr1, 4, 5];

const add = (...nums) => nums.reduce((a, b) => a + b, 0);
// console.log(add(1, 2, 3, 4));

const og = {
    name: "Abby",
    role: "Nurse",
    age: 23
};
const updated = {
    ...og,
    school: "Northeastern"
};

const list1 = [1, 2, 3];
const list2 = [4, 5, 6];
const list3 = [...list1, ...list2];

// console.log(list3);

function checker(...args){
    return Object.values(args).length;
}

// console.log(checker(og, updated));

// --------------------------------------------------
// Closures & Scope


function outer() {
    let counter = 0;
    return function inner(){
        counter++;
        return counter;
    }
}

const count = outer();
// console.log(count());
// console.log(count());

function createMultiplier(multiplier){
    let counter = 1
    return function res(){
        counter = counter * multiplier;
        return counter;
    }
}

const mult = createMultiplier(5);
// console.log(mult());
// console.log(mult());


// ----------------------------------------
// Async/Await Preview


const fakeFetch = () =>
    new Promise((res) => setTimeout(() => res("Date Loaded!"), 1000));

async function loadData(){
    const result = await fakeFetch();
    console.log(result);
}

const getUser = () => 
   new Promise((resolve) => {
    setTimeout(() => {
        resolve({ name: "Andrew", role: "Admin"}); 
   }, 1500);
}); 

async function greetUser() {
    const user = await getUser();
    console.log(`Welcome back, ${user.name}`)
}

greetUser();