// Basic Object
const student: {
    name: string;
    age: number;
    isStudent: boolean;
} = {
    name: "Siyam",
    age: 23,
    isStudent: true
};

console.log(student.name);
console.log(student.age);
console.log(student.isStudent);

// Object with Function
const user = {
    name: "Siyam",
    age: 22,

    action: () => {
        console.log("Hello");
    }
};

console.log(user.name);
console.log(user.age);

user.action();
