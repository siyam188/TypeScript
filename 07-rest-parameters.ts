// Basic Rest Parameter
function add(...numbers: number[]) {
    console.log(numbers);
}

add(10, 20, 30);

// Rest Parameter with Sum
function addNumbers(...numbers: number[]): number {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(addNumbers(10, 20));
console.log(addNumbers(10, 20, 30));
console.log(addNumbers(10, 20, 30, 40));

// Rest Parameter with String
function printNames(...names: string[]): void {
    for (let name of names) {
        console.log(name);
    }
}

printNames("Siyam", "Rahim", "Karim");
