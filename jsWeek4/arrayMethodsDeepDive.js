const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Charlie", age: 35, active: true },
  { name: "Dana", age: 28, active: false },
];

users.filter((u) => {
    if (u.active) {
        console.log(u);
    }
})

const activeUsers = users.map((u) => {
    if (u.active){
        return u;
    }
});

total = 0;
for (let u of activeUsers){
    typeof u === 'undefined' ? total += 0 : total += 1;
}

console.log(total);

// ----------------------------------

const averageAge = users.reduce((arr, user) => arr + user.age, 0) / users.length;
console.log(averageAge);


const oldestActiveUser = users
    .filter((user) => user.active)
    .reduce((oldest, newUser) => newUser.age > oldest.age ? newUser : oldest);

console.log("Oldest User is;\n", oldestActiveUser);