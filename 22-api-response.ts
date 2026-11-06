interface ApiResponse<T> {
    statusCode: number;
    success: boolean;
    data: T;
}

interface User {
    name: string;
    role: string;
}

const userRes: ApiResponse<User> = {
    statusCode: 200,
    success: true,
    data: {
        name: "Siyam",
        role: "Student",
    },
};

console.log(userRes.data.name);
console.log(userRes.data.role);
