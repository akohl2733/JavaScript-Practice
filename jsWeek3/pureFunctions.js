const user = {
    name: "Alice",
    age: 30
}

function updateAge(user, newAge) {
    user.age = newAge;
    return user;
}

const newUser = updateAge(user, 31)

// --------- WILL RETURN SAME OUTPUT --------- //

// console.log("First user", user);
// console.log("New user", newUser);

// -----------------------------------

const person = {
    name: 'alice',
    age: 30
}

function setNewAge(personObj, newAge){
    return {...personObj, age: newAge};
}

const newPerson = setNewAge(person, 32);
// console.log(person);
// console.log(newPerson);

// --------------------------------------

const cart = ["Apple", "banana"];

function removeItem(cartArray, item){
    lowerItem = item.toLowerCase();
    return cartArray.filter((x) => x.toLowerCase() != lowerItem);
}

const updatedCart = removeItem(cart, "Banana");
// console.log(updatedCart);
// console.log(cart);


// -------------------------------------------------

const u = {
    name: "Alice",
    address: {
        city: "New York",
        zip: '10001'
    }
}



function updateCity(user, newCity){

    return {...user, address: {...user.address, city: newCity}}
}

const w = updateCity(u, "Boston");
console.log(w);