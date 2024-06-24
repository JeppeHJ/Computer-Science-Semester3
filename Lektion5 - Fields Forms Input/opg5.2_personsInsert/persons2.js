let persons = [];

function addPersonToList(name, age) {
    let personObject = {
        name: name,
        age: age
    };
    persons.push(personObject);
}

function generateTable() {
    let tableDiv = document.querySelector('#personTabel');
    let html = '<table>';

    // Header row
    html += '<thead><tr><th>Name</th><th>Age</th></tr></thead>';

    // Table body
    html += '<tbody>';
    persons.forEach(person => {
        html += `<tr><td>${person.name}</td><td>${person.age}</td></tr>`;
    });
    html += '</tbody></table>';

    tableDiv.innerHTML = html;
}

let submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', (event) => {
    let name = document.querySelector('#name');
    let age = document.querySelector('#age');

    if (name.value === "" || age.value === "") {
        console.log("You need age and name");
    } else {
        addPersonToList(name.value, age.value);
        generateTable();
        name.value = "";
        age.value = "";
    }
});
