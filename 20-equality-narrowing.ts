const compare = (
    x: string | number,
    y: string | number
) => {
    if (x === y) {
        console.log(x, y);
    }
};

compare("Hello", "Hello");
compare(10, 10);
