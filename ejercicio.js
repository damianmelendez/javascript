// Social Media Profile

// 1. User information
const username = "damian";
const fullname = "damian melendez";
const age = 20;
const isStudent = true;

// 2. Address
const address = {
    street: "dirección falsa",
    city: "Guatemala",
    state: "Jocotenango",
    zipcode: "001002"
};

// Hobbies
const hobbies = ['coding', 'reading', 'gaming'];

// Generating personalized bio 
const personalizedBio = `Hola, soy ${fullname}.
Tengo ${age} años.
Vivo en ${address.city}.
Me gusta ${hobbies.join(', ')}.
Sígueme para más código.`;

// Print user profile
console.log(personalizedBio);


