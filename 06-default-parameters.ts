// Default Parameter
const greetings = (fullName: string, greeting = "Hello") => {
    console.log(greeting + " " + fullName);
};

greetings("Mia");

// Optional vs Default
function test1(age?: number) {
    console.log(age);
}

function test2(age: number = 22) {
    console.log(age);
}

test1();
test2();

// Default Value
function greet(name: string = "Guest") {
    console.log(`Hello ${name}`);
}

greet("Siyam");
greet();
