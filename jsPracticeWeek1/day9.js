// Event Loop, Call Stack, Job Queue

// console.log("1: Start");

// setTimeout(() => {
//     console.log("2. setTimeout");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("3: Promise");
// })

// console.log("4: End");


// ----------------------------------


// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 100);

// Promise.resolve().then(() => {
//     console.log("C");
// })

// console.log("D");

// setTimeout(() => {
//     Promise.resolve().then(() => {
//         console.log("E");
//     })
// }, 0)

// --------------------------------

console.log("Synchronous - event stack. Simple and will be printed immediately - Finished 1st.");

setTimeout(() => {
    console.log("Thought you were missing one.. This is another macrotask - inserted into macrotask queue. This will finish 5th.");
}, 1000);

Promise.resolve().then(() => {
    console.log("This is a microtask - inserted into microtask queue. This will finish  2nd.");
});

Promise.resolve().then(() => {
    console.log("This is another microtask - sending to same location. This will finish 3rd.");
});

setTimeout(() => {
    Promise.resolve().then(() => {
        console.log("A macrotask - will print 4th.")
    });
}, 0);