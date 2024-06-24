// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const userUrl2 = 'https://jsonplaceholder.typicode.com/users/11';
const userUrl3 = 'httpz://jsonplaceholder.typicode.com/users';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

// Function using .then() to handle the promise
function letsThen(url) {
    // Attempt to execute asynchronous code
    try {
        // Initiating an asynchronous request
        let promise = get(url);

        // Handling the response when the promise resolves
        promise.then(r => {
            r.forEach(person => {
                console.log(person); // Processing each person
            });
        }).catch(error => {
            // Catching errors that occur in the promise
            console.error("Error in .then(): " + error);
        });
    } catch (error) {
        // This catch block will only handle synchronous errors
        // For example, if `get` is not a function
        console.error("Synchronous error: " + error);
    }
}

// Function using async-await to handle the promise
async function letsAwait(url) {
    try {
        // Initiating an asynchronous request and waiting for it to resolve
        let response = await get(url);

        // Processing the response
        response.forEach(user => {
            console.log(user); // Processing each user
        });
    } catch (error) {
        // Catching errors that might occur during the fetch operation or in get
        console.error("Error in async-await: " + error);
    }
    // Note: No need for a .catch() method here as 'await' is inside try-catch
}

// Example usage
// letsAwait(userUrl);
// letsThen(userUrl2);
