
 // 1. Partial<T>
interface PartialUser {
    name: string;
    email: string;
    age: number;
}

const user1: Partial<PartialUser> = {
    name: "Siyam"
};


// 2. Required<T>
interface RequiredUser {
    name: string;
    email?: string;
    age?: number;
}

const user2: Required<RequiredUser> = {
    name: "Siyam",
    email: "siyam@gmail.com",
    age: 22
};


// 3. Readonly<T>
interface ReadonlyUser {
    name: string;
    email: string;
}

const user3: Readonly<ReadonlyUser> = {
    name: "Siyam",
    email: "siyam@gmail.com"
};

// user3.name = "Walid"; // Error


// 4. Record<K, T>
type StudentSubjects = Record<string, number>;

const subjects: StudentSubjects = {
    Math: 90,
    English: 85,
    Science: 95
};


// 5. Pick<T, Keys>
interface PickUser {
    name: string;
    email: string;
    age: number;
    password: string;
}

type UserInfo = Pick<PickUser, "name" | "email">;

const user4: UserInfo = {
    name: "Siyam",
    email: "siyam@gmail.com"
};


// 6. Omit<T, Keys>
interface OmitUser {
    name: string;
    email: string;
    age: number;
    password: string;
}

type PublicUser = Omit<OmitUser, "password">;

const user5: PublicUser = {
    name: "Siyam",
    email: "siyam@gmail.com",
    age: 22
};


// 7. Exclude<T, U>
type AllTypes = string | number | boolean;

type ExcludedType = Exclude<AllTypes, string>;

let value7: ExcludedType = 100;


// 8. Extract<T, U>
type AllTypes2 = string | number | boolean;

type ExtractedType = Extract<AllTypes2, string | number>;

let value8: ExtractedType = "Siyam";


// 9. NonNullable<T>
type NullableType = string | number | null | undefined;

type SafeType = NonNullable<NullableType>;

let value9: SafeType = "Siyam";


// 10. Parameters<T>
function getUser(name: string, age: number) {
    return { name, age };
}

type UserParams = Parameters<typeof getUser>;

const user10: UserParams = ["Siyam", 22];


// 11. ConstructorParameters<T>
class Student {
    constructor(
        public name: string,
        public age: number
    ) {}
}

type StudentParams = ConstructorParameters<typeof Student>;

const studentParams: StudentParams = ["Siyam", 22];


// 12. ReturnType<T>
function add(a: number, b: number): number {
    return a + b;
}

type AddReturn = ReturnType<typeof add>;

const result12: AddReturn = 30;


// 13. InstanceType<T>
class Person {
    constructor(public name: string) {}
}

type PersonInstance = InstanceType<typeof Person>;

const person13: PersonInstance = new Person("Siyam");


// 14. ThisParameterType<T>
function getName(this: { name: string }) {
    return this.name;
}

type ThisTypeOfFunction = ThisParameterType<typeof getName>;

const person14: ThisTypeOfFunction = {
    name: "Siyam"
};


// 15. OmitThisParameter<T>
function getAge(this: { age: number }) {
    return this.age;
}

type WithoutThis = OmitThisParameter<typeof getAge>;

const getPersonAge: WithoutThis = () => 22;


// 16. ThisType<T>
type ObjectDescriptor = {
    name: string;
    age: number;
    greet(): void;
};

const person16: ObjectDescriptor & ThisType<ObjectDescriptor> = {
    name: "Siyam",
    age: 22,
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};


// 17. Awaited<T>
type PromiseType = Promise<Promise<string>>;

type ResultType = Awaited<PromiseType>;

const result17: ResultType = "Siyam";


// Output
console.log(user1);
console.log(user2);
console.log(user3);
console.log(subjects);
console.log(user4);
console.log(user5);
console.log(value7);
console.log(value8);
console.log(value9);
console.log(user10);
console.log(studentParams);
console.log(result12);
console.log(person13);
console.log(person14);
console.log(getPersonAge());
person16.greet();
console.log(result17);
