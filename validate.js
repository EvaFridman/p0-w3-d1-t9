const email = 31;
const name = "Eva";
const age = "27";
const agreed = false;
let promo = null;

let isValid = true;

if (email && typeof email === "string" && email.includes("@" )) {
    console.log("ok");
} else if (!email) {
    console.log("Error! Set your email");
    isValid = false;
} else if (typeof email !== 'string') {
    console.log("Error! Email has to be a string");
    isValid = false;
} else if (email.includes("@") === false) {
    console.log("Error! Email has to include @");
    isValid = false;
}

if (name !== null && name !== undefined && typeof name === "string" && name.trim().length > 0) {
    console.log("ok");
} else if (name === null || name === undefined) {
    console.log("Error! Set your name");
    isValid = false;
} else if (typeof name !== 'string') {
    console.log("Error! Name has to be a string");
    isValid = false;
} else if (name.trim().length <= 0) {
    console.log("Error! Name has to include something but spaces");
    isValid = false;
}

if (typeof age === "number" && !isNaN(age) && age >= 14 && age <= 120) {
    console.log("ok");
} else if (typeof age !== "number" || isNaN(age)) {
    console.log("Error! Age has to be a number");
    isValid = false;
} else if (age < 14 || age > 120) {
    console.log("Error! Age has to be in between 14 and 120");
    isValid = false;
}

if (agreed === true) {
    console.log("ok");
} else {
    console.log("Error! Agreed has to be a boolean");
    isValid = false;
}

promo ?? console.log ("без промокода");

if (isValid) {
    console.log("Registration allowed!");
} else {
    console.log("Registration denied. Please fix the errors above.");
}