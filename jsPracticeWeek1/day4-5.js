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

// greetUser();


// -----------------------------------------------
// Quick project


const task1 = {
    title: "Laundry",
    priority: "Medium",
    completed: false
};

const task2 = {
    title: 'Dishes',
    priority: 'High',
    completed: false
};

const task3 = {
    title: "Vacuuming",
    priority: "Low",
    completed: false
};

// array of chores
const arr = [task1, task2, task3];


// closure func
function outer(){
    let counter = 0;
    return function inner(){
        counter ++;
        return counter;
    }
};

const countTasks = outer();

function addTask(title, priority, completed=false){
    task = {
        title: title,
        priority: priority,
        completed: completed
    };
    arr.push(task);
    const count = countTasks();
    console.log(`Added "${title}". Total tasks: ${count}`);
}

const listTasks = (array) => {
    console.log("---- Tasks ----");
    for (let t of array){
        const complete = t.completed ? "Completed" : "Not completed"
        console.log(`${t.title} (Priority Level: ${t.priority}) -- ${complete}`)
    }
}

const fakeFetchTasks = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { title: "Buy groceries", priority: "High", completed: false },
                { title: "Call Mom", priority: "Low", completed: false },
            ]);
        });
    });
}

async function loadInitialTasks() {
    const fetchedTasks = await fakeFetchTasks();
    arr.push(...fetchedTasks);
    console.log("Initial tasks loaded.");
    listTasks(arr);
}

function completeTask(task){
    for (let t of arr){
        if (t.title === task.title){
            t.completed = true;
            return "Successfully updated";
        }
    }
    return `There is no task named ${task.name}`;
}

function listIncompleteTasks(array){
    return array.filter((x) => !x.completed);
    
}

const taskTitles = arr.map((x) => x.title);
console.log("Task titles: ", taskTitles)


// console.log(listIncompleteTasks(arr));
// console.log(completeTask(task1));
// console.log(task1);
// console.log(listTasks(arr));
// (async function () {
//     await loadInitialTasks();
// })();