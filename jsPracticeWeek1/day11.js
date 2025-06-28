// Classes

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login(){
        console.log(`${this.name} has logged in`);
    }
}

const user1 = new User("Andrew", "akohl2733@gmail.com");

// user1.login();

class Admin extends User {

    constructor(name, email, role) {
        super(name, email);
        this.role = role;
    }

    login(){
        console.log(`${this.name} (${this.role}) -- logged in!`);
    }

    deleteUser(user){
        console.log(`${this.name} deleted ${user.name}`)
    }
}

const admin1 = new Admin("Andrew", "akohl2733@gmail.com", "Software Engineer");

// admin1.login();
// admin1.deleteUser(user1);

// ---------------------------------------
// Project on classes

class Person {

    constructor(name, email){
        this.name = name;
        this.email = email;
        this.loggedIn = false;
    }

    login(){
        this.loggedIn = true;
        console.log(`You have successfully logged in, ${this.name}.`);
    }

    logout() {
        this.loggedIn = false;
        console.log(`You have successfully logged out, ${this.name}.`);
    }

    toString(){
        if (this.loggedIn === true) {
            return `This user's name is ${this.name} and their email is ${this.email}.`;
        }
        return "Please log in.";
    }
}

class Manager extends Person {

    constructor(name, email, role = 'admin'){
        super(name, email);
        this.loggedIn = false;
        this.role = role;
    }

    toString(){
        if (this.loggedIn === true) {
            return `This user's name is ${this.name}, their role is ${this.role} and their email is ${this.email}.`;
        }
        return "Please log in.";
    }

    deletePerson(person){
        console.log(`You have successfully removed ${person.name}.`);
        person = null;
    }
}


class Moderator extends Person {

    constructor(name, email){
        super(name, email);
        this.role = 'Moderator';
    }

    suspendUser(person){
        person.suspended = true;
        console.log(`${person.name} is now suspended.`);
    }

    warnUser(person, reason="Unspecified"){
        console.log(`Warning for ${person.name} -- ${reason}`);
    }

    viewUserStatus(person){
        return `${person.name} is currently ${person.loggedIn ? 'online' : 'offline'}. They are${person.suspended ? '' : ' NOT'} currently suspended.`
    }
}



const p1 = new Person("Abby", "abbym@gmail.com");
const m1 = new Manager("Andrew", 'akohl2733@gmail.com', "Boss");
const mod1 = new Moderator("Derek", 'dsie@gmail.com');

const users = [p1, new Person("Zoe", "zoe@example.com")];
Manager.prototype.removeUserByName = function(name, userList){
    return userList.filter(user => user.name !== name);
};
const updatedUsers = m1.removeUserByName("Zoe", users);
// console.log(updatedUsers);

p1.login();
mod1.suspendUser(p1);
console.log(mod1.viewUserStatus(p1));


// -------------------------------------------------------
// Quiz

// // Question 1:
// class User {
//   constructor(username) {
//     this.username = username;
//   }
// }

// class Admin extends User {
//   constructor(username, level) {
//     // what goes here?
//   }
// }

// // ANSWER:
// super(username);
// this.level = level;

// -------------------------------------------------------------------------------------------

// // 2. Overriding vs Extending Methods
// Question:
// What’s the difference between overriding a method and extending it in a subclass?
// Give a short code example of each.

// -------------------------------------------------------------------------------------------

// // 3. Role-Based Behavior
// You have a base Person class and a Moderator subclass.

// Question:
// Write a method in Moderator called warnUser(user) that logs a message like:
// "{user.name} has received a warning from {moderator.name}"


// // ANSWER
// warnUser(user){
//     return `${user.name} had received a warning from ${Moderator.name}`;
// }

// -------------------------------------------------------------------------------------------

//  4. instanceof Usage
// You have an array of people: [Person, Moderator, Manager].

// Question:
// How would you check if someone is an instance of Moderator before calling warnUser?

// // ANSWER

// const people = [Person, Moderator, Manager];
// if (someone instanceof Moderator){
//     someone.warnUser(x);
// }