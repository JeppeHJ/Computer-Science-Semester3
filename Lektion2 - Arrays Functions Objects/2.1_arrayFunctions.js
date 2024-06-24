// max(array): returnerer det største element i arraye
let arrayOfNumbers = [1, 4, 6, 2, 10, 3, 11];

function max(array) {
    let currentMax = array[0];
    for (let i = 1; i <= array.length; i++) {
        if (array[i] > currentMax) {
            currentMax = array[i];
        }
    }
    return currentMax;
}

function contains(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}

function sum(array) {
    let currentSum = 0;
    for (let i = 0; i < array.length; i++) {
        currentSum += array[i];
    }
    return currentSum;
} 

console.log(max(arrayOfNumbers));
console.log(contains(arrayOfNumbers, 11));
console.log(sum(arrayOfNumbers));