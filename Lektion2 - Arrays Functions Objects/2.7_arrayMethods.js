class ExtendedArray extends Array {
    max() {
        let currentMax = this[0];
        for (let i = 1; i < this.length; i++) {
            if (this[i] > currentMax) {
                currentMax = this[i];
            }
        }
        return currentMax;
    }

    contains(element) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === element) {
                return true;
            }
        }
        return false;
    }

    sum() {
        let currentSum = 0;
        for (let i = 0; i < this.length; i++) {
            currentSum += this[i];
        }
        return currentSum;
    }
}

let arrayOfNumbers = new ExtendedArray(1, 4, 6, 2, 10, 3, 11);

// Test af de nye metoder
console.log(arrayOfNumbers.max()); // Output: 11
console.log(arrayOfNumbers.contains(10)); // Output: true
console.log(arrayOfNumbers.sum()); // Output: 37
