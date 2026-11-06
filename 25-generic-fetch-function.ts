interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

interface User {
    id: number;
    name: string;
    email: string;
}

interface Blog {
    id: number;
    title: string;
    description: string;
}

const fetchData = async <T>(
    url: string
): Promise<T | undefined> => {

    try {
        const res = await fetch(url);

        const result: ApiResponse<T> = await res.json();

        if (!res.ok || !result.success) {
            throw new Error(result.message);
        }

        return result.data;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("Something Went Wrong");
        }

        return undefined;
    }
};

// User API
const userData = await fetchData<User>("/api/users");

if (userData) {
    console.log(userData.name);
}

// Blog API
const blogData = await fetchData<Blog>("/api/blogs");

if (blogData) {
    console.log(blogData.title);
}
