
class Empe {
    name: string;
    protected _baseSalary: number;

    constructor(name: string, _baseSalary: number) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }

    get baseSalary(): number {
        return this._baseSalary;
    }

    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }
        this._baseSalary = newSalary;
    }

    calculatePay(taxRate: number): number {
        return this.baseSalary - this.baseSalary * taxRate;
    }
}

class Manage extends Empe {
    calculatePay(): number {
        return this.baseSalary + 5000;
    }
}

class Developer extends Employee {
    type: string;

    constructor(name: string, _baseSalary: number, type: string) {
        super(name, _baseSalary);
        this.type = type;
    }

    calculatePay(taxRate: number): number {
        return this.basesalary + 3000 - this.basesalary * taxRate;
    }
}

const emp = new Empe("Mir", 20000);
const mang = new Manage("Mizan", 20000);
const developer = new Developer("Firoz", 20000, "Backend");

console.log(emp.calculatePay(0.1));
console.log(mang.calculatePay());
console.log(developer.calculatePay(0.1));
