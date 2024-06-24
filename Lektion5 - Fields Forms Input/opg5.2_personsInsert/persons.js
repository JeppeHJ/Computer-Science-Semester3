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
    // Clear existing table content
    tableDiv.innerHTML = '';

    // Create the table element
    let table = document.createElement('table');

    // Create the header row of the table
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    let keys = Object.keys(persons[0]);

    keys.forEach(key => {
        let th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create tbody to insert data
    let tbody = document.createElement('tbody');

    persons.forEach(person => {
        let row = document.createElement('tr');
        Object.keys(person).forEach(key => {
            let cell = document.createElement('td');
            cell.textContent = person[key];
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableDiv.appendChild(table);
}

let submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', (event) => {
    let name = document.querySelector('#name');
    let age = document.querySelector('#age');

    if (name.value === "" || age.value === "") {
        console.log("You need age and name");
    } else {
        addPersonToList(name.value, age.value); // Use .value here
        generateTable();
        name.value = "";
        age.value = "";
    }
});

