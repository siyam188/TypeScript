const concatName = (firstName: string, lastName?: string) => {
    if (!lastName) {
        return firstName;
    }

    return firstName + " " + lastName;
};

console.log(concatName("Mia"));
console.log(concatName("Siyam", "Mia"));
