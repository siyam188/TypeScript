// Interface
interface IUser {
    name: string;
    age: number;
    isActive: boolean;
    action: () => void;
    badges: string[];
}

// Object using Interface
const user: IUser = {
    name: "Siyam",
    age: 22,
    isActive: true,

    action: () => {
        console.log("Hello");
    },

    badges: ["abc", "def"]
};

console.log(user);

user.action();
