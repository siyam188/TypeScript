interface ApiResponse<T> {
    statusCode: number;
    success: boolean;
    data: T;
}

interface User {
    name: string;
    age: number;
}

interface Product {
    title: string;
    price: number;
}

const userResponse: ApiResponse<User> = {
    statusCode: 200,
    success: true,
    data: {
        name: "Siyam",
        age: 22,
    },
};

const productResponse: ApiResponse<Product> = {
    statusCode: 200,
    success: true,
    data: {
        title: "Laptop",
        price: 50000,
    },
};
