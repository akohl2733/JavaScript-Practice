// Person class - parent class for moderator and manager
class Person {
    constructor(name, email, config = {}){
        this.name = name;
        this.email = email;
        this.config = config;
        this.loggedIn = false;
        this.warnings = [];
    };

    logIn(){
        this.loggedIn = true;
        console.log(`${this.name} is successfully logged in.`);
    };

    viewDashboard(){
        const layout = this.config?.dashboard?.layout ?? 'grid';
        const theme = this.config?.preferences?.theme ?? 'light';
        console.log(`Layout: ${layout}\nTheme: ${theme}`);
    };

    getInfo(){
        return `Name: ${this.name}\nEmail: ${this.email}\nRole: ${this.role ?? "User"}`;
    }
};

class Moderator extends Person {
    constructor(name, email, config){
        super(name, email, config);
        this.role = "Moderator";
    }

    warnUser(person, reason = "unspecified"){
        person.warnings.push({reason, by: this.name, date: new Date() });
        console.log(`${person.name} received a warning. Reason: ${reason}.`);
    }
}

class Manager extends Person {
    constructor(name, email, config){
        super(name, email, config);
        this.role = "Manager";
    }

    resetConfig(person){
        person.config = {};
        console.log(`Configurations successfully reset for ${person.name}.`);
    }
}

// logging function 
function log(message){
    console.log(`[${this.name.toUpperCase()}] ${message}`);
}

// Creating class instances
const abby = new Person("Abby", "abby@gmail.com", {
    dashboard: { layout: 'list' },
    preferences: { theme: 'dark'}
});

const mod = new Moderator('Andrew', 'akohl2733@gmail.com', {
    dashboard: { layout: 'grid' },
    preferences: { theme: 'light'}
})

const mgr = new Manager("Chloe", "chloezeke@gmail.com", {
    dashboard: { layout: 'grid' },
    preferences: { theme: 'dark' }
})

// leveraging bind to make adminLogger
const adminLogger = log.bind(mgr);
adminLogger("Overwrote Abby's config.")