function demoScope() {
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
    }
    console.log(x);
    // console.log(y);
}



function outer(){
    const message = "hello";
    function inner() {
        console.log(message);
    }
    return inner;
}

const greet = outer();
// greet();


// --------------------------------------------

function createCounter(start = 0) {
    let count = start;

    return ({
        increment: () => ++count,
        decrement: () => --count,
        reset: () => count = 0,
        getCount: () => count
    })
}

const counter = createCounter(10);
const counter1 = createCounter(11)
counter.increment();
counter1.increment();
counter1.decrement();
// console.log(counter.getCount());
// console.log(counter1.getCount());


// ---------------------------------------------------

function outer(income = 0){
    return ({
        additionalIncome: (extra) => income += extra,
        expenses: (expenses) => income -= expenses,
        divorce: () =>  income *= 0.5,
        bankruptcy: () => income = 0,
        total: () => income
    })
}

const income = outer(100000)
income.divorce()
console.log(income.total())