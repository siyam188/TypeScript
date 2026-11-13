
class Employe {
    constructor(
        public name: string,
        private basesalary: number
    ) {}

    // Getter
    get baseSalary(): number {
        return this.basesalary;
    }

    // Setter
    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative");
        }
        this.basesalary = newSalary;
    }

    // Method
    getSalaryWithBonus(): number {
        return this.basesalary + 5000;
    }
}

const employe1 = new Employe("Siyam", 30000);

console.log(employe1.name);
console.log(employe1.baseSalary);

employe1.baseSalary = 35000;

console.log(employe1.baseSalary);
console.log(employe1.baseSalary);
