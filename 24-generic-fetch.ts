interface User {
    id: number;
    name: string;
    email: string;
}

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

const fetchUser = async (): Promise<User | undefined> => {
    try {
        const res = await fetch("/api/v1/some-endpoint");

        const data: ApiResponse<User> = await res.json();

        if (!res.ok || !data.success) {
            throw new Error(`Failed fetch user data: ${data.message}`);
        }

        return data.data;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.error("Something Went Wrong");
        }

        return undefined;
    }
};

const userData = await fetchUser();

if (userData) {
    console.log(userData.name);
}
