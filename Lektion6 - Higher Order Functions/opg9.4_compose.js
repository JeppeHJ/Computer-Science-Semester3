/**
 * Compose function that takes two functions and a number, and applies the first function to the result of the second function.
 *
 * @param {function} f1 - The first function to apply.
 * @param {function} f2 - The second function to apply.
 * @param {number} a - The number to be passed to f2.
 * @returns {*} - The result of applying f1 to the result of f2(a).
 */
function Compose(f1, f2, a) {
    // Apply f2 to 'a', then apply f1 to the result of f2(a).
    return f1(f2(a));
}

/**
 * Modified Compose function that takes two functions and returns a new function.
 * This new function, when called with a value, applies the second function to the value,
 * and then the first function to the result.
 *
 * @param {function} f1 - The first function to be applied.
 * @param {function} f2 - The second function to be applied.
 * @returns {function} - A new function that applies f1 to the result of f2(x).
 */
function Compose(f1, f2) {
    // Return a new function that takes 'x' as an argument.
    return function(x) {
        // Apply f2 to 'x', then apply f1 to the result.
        return f1(f2(x));
    };
}

/**
 * Compose function that takes an array of functions and returns a new function.
 * This new function composes all the functions in the array: f1(f2(...fn(x))).
 *
 * @param {function[]} funcs - An array of functions to compose.
 * @returns {function} - A new function that composes all the functions in the array.
 */
function Compose(funcs) {
    // Return a new function that takes 'x' as an argument.
    return function(x) {
        // Use reduceRight to apply each function in the array to the result of the next function, starting from the last function.
        // The initial value for the reduction is 'x'.
        return funcs.reduceRight((acc, func) => func(acc), x);
    };
}
