const person = {
    name: "Andrew",
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

// const greetRef = person.greet();
// greetRef();          // This will not work because 'this' is lost

const boundGreet = person.greet.bind(person);
// boundGreet();

// -------------------------------------------

function logMessage(message){
    console.log(`[${this.label}]: ${message}`);
};

const dbLogger = logMessage.bind({ label: 'Database'});
const authLogger = logMessage.bind({ label: "Auth" });

// dbLogger("Connection Established");
// authLogger("User logged in");

// logMessage.call({label: "API"}, "GET /status");
// logMessage.apply({label: "Scheduler"}, ["Job Started"]);


// -----------------------------------------------

function announce(event, second = "") {
    console.log(`[${this.system}] - ${event} - ${second}`);
}

const a = announce.bind({system:"XBox"});
a("Fornite concert.");

announce.call({system:"Apple Streaming"}, "Travis Scott Astrofest", "Kanye Larry Hoover");
announce.apply({system:"USA"}, ["WWI", "WWII"]);