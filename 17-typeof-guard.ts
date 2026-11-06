const print = (value: string | number) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value;
    }
};

console.log(print("siyam"));
console.log(print(123));
