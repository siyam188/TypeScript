interface User {
    name: string;
    address?: {
        street: string;
    };
}

const loggedInUser: User = {
    name: "Mir",
    address: {
        street: "ABC"
    }
};

const showAddress = (user: User | null) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }

    throw new Error("User not found");
};

showAddress(loggedInUser);
