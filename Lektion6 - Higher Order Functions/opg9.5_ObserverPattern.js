/**
 * Function that creates a Subject in the Observer pattern.
 * @returns {object} An object containing methods for registering and notifying observers.
 */
function Subject() {
    // An array to hold observer functions.
    let observers = [];

    /**
     * Registers an observer.
     * @param {function} observer - The observer function to be registered.
     */
    function registerObserver(observer) {
        // Check if the observer is a function. If not, it's not a valid observer.
        if (typeof observer === 'function') {
            observers.push(observer);
        } else {
            throw new Error('Observer must be a function');
        }
    }

    /**
     * Notifies all registered observers.
     */
    function notifyObservers() {
        // Call each observer function with the subject as the context.
        observers.forEach(observer => observer());
    }

    // Return an object containing the registerObserver and notifyObservers methods.
    return {
        registerObserver,
        notifyObservers
    };
}

// Example usage:

// Create a new subject.
let mySubject = Subject();

// Define a couple of observer functions.
function observer1() {
    console.log('Observer 1 notified');
}

function observer2() {
    console.log('Observer 2 notified');
}

// Register the observers with the subject.
mySubject.registerObserver(observer1);
mySubject.registerObserver(observer2);

// Notify all observers.
mySubject.notifyObservers();
