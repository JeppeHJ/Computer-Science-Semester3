function compareIgnoreCase(s1, s2) {
    if (s1.toLowerCase() > s2.toLowerCase()) {
        return 1;
    } else if (s1.toLowerCase() === s2.toLowerCase()) {
        return 0;
    } else {
        return -1;
    }
}

function compareLen(s1, s2) {
    if (s1.length > s2.length) {
        return 1;
    } else if (s1.length === s2.length) {
        return 0;
    } else {
        return -1;
    }
}

/**
 * Higher-order function that takes a compare function and returns a sort function.
 * @param {function} compareFunction - A comparison function that defines the sort order.
 * @returns {function} - A sort function that sorts an array of strings using the provided compare function.
 */

function compareSort(compareFunction) {
    // Return a function that takes an array and sorts it using the provided compare function.
    return function (array) {
        return array.sort(compareFunction);
    };
}

// Create lenSort function using compareSort and compareLen.
// lenSort will sort an array of strings based on their lengths.
const lenSort = compareSort(compareLen);

// Create ignoreCaseSort function using compareSort and compareIgnoreCase.
// ignoreCaseSort will sort an array of strings ignoring case sensitivity.
const ignoreCaseSort = compareSort(compareIgnoreCase);

// Example usage
let strings = ["Banana", "apple", "Cherry", "date"];
console.log("Sorted by length:", lenSort(strings));
console.log("Sorted ignoring case:", ignoreCaseSort(strings));
