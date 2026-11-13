
abstract class Employee {
    constructor(
        public name: string,
        protected baseSalary: number
    ) {}

    // Abstract Method
    abstract calculatePay(): number;

    // Normal Method
    showDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Base Salary: ${this.baseSalary}`);
        console.log(`Total Salary: ${this.calculatePay()}`);
        console.log("----------------------");
    }
}

class Manager extends Employee {
    calculatePay(): number {
        return this.baseSalary + 5000;
    }
}

class Developer extends Employee {
    calculatePay(): number {
        return this.baseSalary + 3000;
    }
}

// Manager Object
const manager = new Manager("Siyam", 30000);

// Developer Object
const developer = new Developer("Mir", 25000);

// Display Details
manager.showDetails();
developer.showDetails();
