const user = {
    name: "Andrew",
    role: "admiN",
    isAdmin: true
};

function checkAccess(user){
    if (user.role.toLowerCase() === "admin"){
        return "Grant full access";
    } else if (user.role.toLowerCase() === "editor"){
        return "Edit access granted";
    } else if (user.role.toLowerCase() === "viewer"){
        return "Read-only access";
    } else {
        return "Accessed denied.";
    }
}

// console.log(checkAccess(user));

const ad = u => u.isAdmin ? "Grant Full Access" : "No access allowed";
console.log(ad(user));



// -------------------------------------------------------------------


const this_user = {
    name: "Andrew",
    role: "admiN",
    isAdmin: true,
    permissions: ["dashboard", "sequences", "task page"]
};

function checkPermissions(u){
    if (!u || !u.permissions){
        console.log("No access granted");
        return;
    }
    for (const p of u.permissions){
        console.log(`${u.name} has permission to access the ${p}`);
    }
}

checkPermissions(this_user);
