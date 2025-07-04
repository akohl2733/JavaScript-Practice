// Promise Chaining

function fetchUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched user");
            resolve({id: 1, name: 'Andrew'});
        }, 1000);
    });
}


function fetchOrder(userId){
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log(`Fetched orders for user ${userId}`);
            resolve(['Order1', "order2", 'Order3']);
        }, 1000)
    });
}

// fetchUser()
//     .then(user => {
//         return fetchOrder(user.id);
//     })
//     .then(orders => {
//         console.log("Orders", orders);
//     })
//     .catch(error => {
//         console.error("Something went wrong", error);
//     })

// ----------------------------------------------------

function searchProduct(keyword){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Search for product "${keyword}"...`);
            resolve({id: 1, name: "Wireless Mouse"});
        }, 1000);
    });
}

function getPrice(productId){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetched price for product #${productId.id}...`)
            resolve(29.95);
        }, 1000);
    });
}

function applyDiscount(productPrice){
    return new Promise((resolve) => {
        setTimeout(() => {
            const finalPrice = productPrice * 0.9
            console.log("Applying discount...")
            resolve(finalPrice.toFixed(2));
        }, 1000);
    })
}


// searchProduct("Mouse")
//     .then((item) => {
//         return getPrice(item);
//     })
//     .then(price => {
//         return applyDiscount(price);
//     })
//     .then(final => {
//         console.log(`The final price is $${final}`);
//     })
//     .catch(error => {
//         console.error('There was an error', error);
//     })


// -------------------------------------------------

// async/await example

// async function processPurchase() {
//     try {
//         const item = await searchProduct("Mouse");
//         const price = await getPrice(item);
//         const final = await applyDiscount(price);
//         console.log(`The final price is $${final}`);
//     } catch (error) {
//         console.error("There was an error", error);
//     }
// }

// processPurchase();

// ---------------------------------------------

const p1 = Promise.resolve(1);
// const p2 = Promise.reject('error');
const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
//     .then(results => {
//         console.log(results);
//     })
//     .catch(err => {
//         console.error("There was a problem:", err);
//     });


// -------------------------------------------


const slow = new Promise(resolve => 
    setTimeout(() => resolve("slow"), 3000)
);
const fast = new Promise(resolve => 
    setTimeout(() => resolve("fast"), 1000)
);

Promise.race([slow, fast])
    .then(result => {
        console.log(result);
});