function checkAge(age: string | number) {

    if (typeof age === "number") {
        console.log("Your age is:", age);
    } 
    else {
        console.log("Your age:", age);
    }
}

checkAge(22);
checkAge("Twenty Two");
