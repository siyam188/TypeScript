type Admin = {
    name: string;
    role: "admin";
    permissions: string[];
};

type Student = {
    name: string;
    role: "student";
    course: string;
};

function checkUser(user: Admin | Student) {

    if ("permissions" in user) {
        console.log("Admin:", user.permissions);
    } 
    else {
        console.log("Student:", user.course);
    }
}

checkUser({
    name: "Siyam",
    role: "admin",
    permissions: ["Read", "Write"]
});

checkUser({
    name: "Rahim",
    role: "student",
    course: "CSE"
});
