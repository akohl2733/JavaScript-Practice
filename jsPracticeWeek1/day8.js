const person = {
    name: "Andrew",
    age: 25,
    location: "NC"
};

const { name, age } = person;

// console.log(`${name} is ${age} years old.`);

function createProfile(person){
    return {name, age};
}

// console.log(createProfile(person.name, person.age));


// -----------------------------------------------

function createProfileCard({name, age, location}) {
    return `
    ---------------------
    Name: ${name}
    Age: ${age}
    Location: ${location}
    ---------------------
    `
};

const user1 = {
    name: "Abby",
    age: 24,
    location: "San Francisco"
};

// console.log(createProfileCard(user1));

// -----------------------------------------------

function generateProfileCard({
    name = "Anonymous",
    age = "Not Specified",
    location = "unknown",
    profession = "unemployed",
    interests = []
}) {
    const interestList = interests.length ? interests.join(", ") : "None";

    return `
        Name's Profile: ${name}
    ------------------------------
    Age: ${age}
    Location: ${location}
    Profession: ${profession}
    Interests: ${interestList}
    ------------------------------    
    
    `;
};

const user2 = {
    name: "Andrew",
    age: 24,
    location: "Charlotte, NC",
    profession: "Business Development Representative",
    interests: ["Walking", "Going to the gym", "Playing video games", "Watching sports"]
}

console.log(generateProfileCard(user1));



// ------------------------------------------------------



function generatePlayerProfile({
    name = "Anonymous",
    team = "team",
    position = "Unknown",
    yards = []
}) {
    yards = Array.isArray(yards) ? yards : [];

    const totalYards = yards.reduce((ag, curr) => ag + curr, 0);
    const yardsPerSeason = yards.length ? Math.floor(totalYards / yards.length).toLocaleString() : "0";

    return `
            Player: ${name}
    --------------------------------
    Team: ${team}
    Position: ${position}
    Yards/Season: ${yardsPerSeason}
    --------------------------------
    `
}


const user3 = {
    name: "Justin Jefferson",
    team: "Minnesota Vikings",
    position: "Wide Receiver",
    yards: [1400, 1800, 1200]
}
console.log(generatePlayerProfile(user3));

