// Define an array of person objects, each with a name, age, and mobile number.
let personer = [
    { navn: "Anna", alder: 28, mobilnummer: "12345678" },
    { navn: "Bjørn", alder: 35, mobilnummer: "87654321" },
    { navn: "Clara", alder: 42, mobilnummer: "12341234" },
    // More person objects can be added here.
];

// Use the 'filter' function to find the person with a specific mobile number.
// 'filter' iterates over each element in the 'personer' array.
// 'person' is the current element being processed.
let findPerson = personer.filter((person) => person.mobilnummer == "12345678");
// Log the first element of the filtered array. 
// If no matches are found, this will be undefined.
console.log(findPerson[0]); 

// Use 'reduce' to find the person with the lowest age.
// 'reduce' processes each element in 'personer' to produce a single value.
// 'total' is the accumulator, initially set to the largest possible number.
// 'person' is the current element. 'Math.min' compares the current person's age with the accumulated total.
let findLowestAge = personer.reduce((total, person) => Math.min(person.alder, total), Number.MAX_VALUE);
// Log the lowest age found.
console.log(findLowestAge);

// Use 'forEach' to assign a unique ID to each person.
// 'forEach' executes a provided function once for each array element.
// 'p' is the current element, 'index' is the index of 'p' in 'personer'.
personer.forEach((p, index) => p.id = index);

// Use 'map' and 'reduce' to create a comma-separated string of names, sorted alphabetically.
// 'map' creates a new array with the names of each person.
// 'sort' sorts the names alphabetically.
// 'reduce' concatenates them into a single string, separated by commas.
console.log(personer.map((p) => p.navn).sort().reduce((total, n) => total + ', ' + n));

// Use 'filter' and 'map' to create an array of objects for persons older than 30.
// The 'filter' function selects persons whose age is greater than 30.
// The 'map' function transforms each selected person into a new object with only 'navn' and 'alder' properties.
console.log(personer.filter((p) => p.alder > 30).map((p) => ({navn: p.navn, alder: p.alder})));

