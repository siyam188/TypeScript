// String Array
const arr: string[] = ["programming", "4667"];

// Number Array
const numArr: number[] = [1, 2, 3, 4];

// Boolean Array
let isActive: boolean[] = [true, false, true];

console.log(isActive);

// Array Generic Syntax
const arr1: Array<string> = ["programming", "4667"];

// Push Method
let students: string[] = ["siyam", "walid", "shakib"];

students.push("rezve");

console.log(students);
console.log(students[0]);
console.log(students[1]);

// Readonly Array
let numbers: readonly number[] = [10, 20, 30];

console.log(numbers);

// numbers.push(40); // Error
// numbers[0] = 100; // Error
