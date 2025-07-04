function mockFetch(endpoint) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.3;

            if (shouldFail) {
                reject(`Failed to fetch from ${endpoint}`);
            } else {
                resolve({ data: `Data from ${endpoint}`});
            }
        }, 1000);
    });
}

async function displayData(endpoint){
    try {
        const results = await mockFetch(endpoint);
        console.log(results.data);
    }
    catch(err) {
        console.log("There was an error:", err);
    }
}

displayData('/products');

// ------------------------------------------
// Using mockFetch from above ....


async function loadIndependently() {
    try {
        const users = await mockFetch('/users');
        console.log("Users:", users.data);
    }
    catch(err) {
        console.log("Users failed:", err);
    }

    try {
        const orders = await mockFetch('/orders');
        console.log("Orders:", orders.data);
    }
    catch(err) {
        console.log("Orders failed:", err);
    }

    try {
        const products = await mockFetch('/products');
        console.log("Products:", products.data);
    }
    catch(err) {
        console.log("Products failed:", err);
    }
}

// loadIndependently();

// -----------------------------------------
// Same thing but with helper function

async function safeFetch(ep) {
    try {
        const res = await mockFetch(ep);
        return { success: true, data: res.data };
    } catch(err) {
        return { success: false, err };
    }
}

async function load(){
    const endpoints = ['/products', '/orders', '/users'];

    for (let e of endpoints) {
        const res = await safeFetch(e);

        if (res.success === true){
            console.log(`${e} ->`, res.data);
        } else {
            console.log(`${e} failed`, res.err);
        }
    }
}

load();