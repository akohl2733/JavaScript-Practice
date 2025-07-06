class ValidationError extends Error {
    constructor(message){
        super(message)
        this.name = "ValidationError"
    }
}

function validateUser(user){
    if (typeof user.name !== 'string' || user.name.length < 2){
        throw new ValidationError("Name must be at least 2 character.")
    }
    if (!user.email.includes("@")){
        throw new ValidationError("Invalid email address.")
    }

    if (user.password.length < 8) {
        throw new ValidationError("Password must be at least 8 characters long.")
    }
    const regex = /[@#\$%\^&\*\?]/;
    if (!regex.test(user.password)){
        throw new ValidationError("Password must contain at least 1 special character. [@#$%^&*?]")
    }

    return true;
}

const u = {
    name: "Andrew",
    email: 'akohl2733@gmail.com',
    password: "passwg"
}

const u2 = {
    name: 'kohl',
    email: 'akohl2733@gmail.com',
    password: 'password'
}

try {
    validateUser(u);
    console.log("Valid user!");    
} catch (err) {
    if (err instanceof ValidationError) {
        console.error("Validation failed:", err.message);
    } else {
        console.error("Unknown error:", err.message);
    }
}