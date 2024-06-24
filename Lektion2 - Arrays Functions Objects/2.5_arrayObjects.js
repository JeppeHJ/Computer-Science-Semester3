let person1 = {
    name: "jeppe",
    email: "jeppe@google.com",
    phonenumber: "13371337"
}
let person2 = {
    name: "jeppe2",
    email: "jeppe2@google.com",
    phonenumber: "13371337"
}
let person3 = {
    name: "jeppe3",
    email: "jeppe3@google.com",
    phonenumber: "13371337"
}

let arrayOfPersons = [person1, person2, person3];

arrayOfPersons[3] = {
    name: "jeppe4",
    email: "jeppe3@google.com",
    phonenumber: "13371337"
}

arrayOfPersons.forEach(person => {
    console.log(person);
});

delete arrayOfPersons[0];

console.log("---------");


arrayOfPersons.forEach(person => {
    console.log(person);
});

