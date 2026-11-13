class Employee{
    name:string;
    basesalary:number;
    constructor(name:string,basesalary:number){
        this.name=name;
        this.basesalary=basesalary;
    }
}
const employee1 = new Employee("Siyam", 30000);

console.log(employee1.name);
console.log(employee1.basesalary);
