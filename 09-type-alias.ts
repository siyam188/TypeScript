// Type Alias
type User = {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];
};

// First Object
const user1: User = {
    name: "Siyam",
    age: 123,
    isActive: true,
    action: () => console.log("Hello"),
    badges: ["abc", "def"]
};

console.log(user1);

// Second Object
const user2: User = {
    name: "Rahim",
    age: 22,
    isActive: true,
    action: () => console.log("Welcome Rahim"),
    badges: ["Gold", "Silver"]
};

console.log(user2);

// Calling Function
user1.action();
user2.action();
