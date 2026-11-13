class Empl{
    name:string;
    protected _baseSalary:number;
    constructor(name:string,_baseSalary:number){
         this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalry():number{
        return this._baseSalary;
    }
    set baseSalary(newSalary:number)
    {
         if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }
        this._baseSalary = newSalary;
    }
    describe():string{
        return `${this.name} erans ${this.baseSalary}`;

    }
}

class Manager extends Empl{
    teamMemberCount:number;
    constructor(name:string,_baseSalary:number,teamMemberCount:number){
        super(name,_baseSalary);
        this.teamMemberCount=teamMemberCount;
    }
     describeWork(): string {
        return `${this.name} manages ${this.teamMemberCount} people`;
    }

    describeManager(): string {
        return `${this.name} earns ${this._baseSalary}`;
    }
}
// Employee Object
const employee = new Empl("Mir", 22000);

console.log(employee.describe());

// Manager Object
const manager = new Manager("Mizan", 24000, 20);

console.log(manager.describe());
console.log(manager.describeWork());
console.log(manager.describeManager());
