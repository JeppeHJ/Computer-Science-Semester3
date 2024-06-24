let inputFields = document.querySelectorAll('input');

inputFields.forEach(inputField => {
    let label = document.createElement('label');
    label.id = inputField.id + "Label";
    label.innerHTML = inputField.id + ": ";
    inputField.parentNode.insertBefore(label, inputField);
});

let numberLabel = document.querySelector('#talLabel');
let timeLabel = document.querySelector('#tidLabel');

numberLabel.addEventListener("click", event => {
    let inputField = document.querySelector('#tal');
    inputField.value = Math.floor(Math.random() * (9 - 0 + 1) + 1);
})

inputFields[0].addEventListener("click", event => {
    inputFields[0].value = Math.floor(Math.random() * (9 - 0 + 1) + 1);
})

// Anden løsning

document.addEventListener('DOMContentLoaded', () => {
    // Function to create a label
    function createLabel(forElement, text) {
        let label = document.createElement('label');
        label.htmlFor = forElement.id;
        label.textContent = text;
        forElement.parentNode.insertBefore(label, forElement);
    }

    // Function to update the input field with a random number
    function showRandomNumber() {
        this.value = Math.floor(Math.random() * 100); // Random number between 0 and 99
    }

    // Function to update the input field with the current time
    function showCurrentTime() {
        let now = new Date();
        this.value = now.toLocaleTimeString(); // Current time
    }

    // Select input fields
    let numberInput = document.querySelector('#tal');
    let timeInput = document.querySelector('#tid');

    // Create and insert labels
    createLabel(numberInput, 'Tal: ');
    createLabel(timeInput, 'Tid: ');

    // Add event listeners for random number and current time
    numberInput.addEventListener('click', showRandomNumber);
    timeInput.addEventListener('click', showCurrentTime);

    // Add the same event listeners to the labels
    // This calls the function on the "label"-object. Not what we want since we are manipulating its associated input-field!
    // .this = label[for="tal"]
    document.querySelector('label[for="tal"]').addEventListener('click', showRandomNumber);

    // Here we use .bind on the function, so the object it is called on is actually the parameter given
    // .this = numberInput
    document.querySelector('label[for="tal"]').addEventListener('click', showRandomNumber.bind(numberInput));
    document.querySelector('label[for="tid"]').addEventListener('click', showCurrentTime.bind(timeInput));
});
