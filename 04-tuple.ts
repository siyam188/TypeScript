// Basic Tuple
let user: [string, number, boolean] = ["Siyam", 22, true];

console.log(user);

// Tuple Index
let person: [string, number] = ["Siyam", 22];

console.log(person[0]);
console.log(person[1]);

// Optional Tuple
let users: [string, number?] = ["Siyam"];

console.log(users);

// Readonly Tuple
const dhakaLatlong: readonly [number, number] = [23.8103, 90.4125];

console.log(dhakaLatlong);
