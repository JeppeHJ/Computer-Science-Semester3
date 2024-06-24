const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

// Function to generate a table from an array of mountain objects
function generateTable(mountains) {
    // Create a new table element
    let table = document.createElement('table');

    // Creating the header row of the table
    let thead = document.createElement('thead'); // Create a 'thead' element
    let headerRow = document.createElement('tr'); // Create a row for the headers

    // Loop through the keys of the first object in the mountains array
    // These keys will be the column headers for the table
    Object.keys(mountains[0]).forEach(key => {
        let th = document.createElement('th'); // Create a header cell
        th.textContent = key; // Set the text of the header cell to the key
        headerRow.appendChild(th); // Add the header cell to the header row
    });

    thead.appendChild(headerRow); // Add the header row to the 'thead' element
    table.appendChild(thead); // Add the 'thead' element to the table

    // Creating the body of the table
    let tbody = document.createElement('tbody'); // Create a 'tbody' element

    // Loop over each mountain object in the array
    mountains.forEach(mountain => {
        let row = document.createElement('tr'); // Create a row for each mountain

        // For each key in the mountain object, create a cell and add it to the row
        Object.keys(mountain).forEach(key => {
            let cell = document.createElement('td'); // Create a regular cell
            cell.textContent = mountain[key]; // Set the text of the cell

            // If the value is a number, align the text to the right
            if (typeof mountain[key] === 'number') {
                cell.style.textAlign = 'right';
            }

            row.appendChild(cell); // Add the cell to the current row
        });

        tbody.appendChild(row); // Add the row to the 'tbody' element
    });

    table.appendChild(tbody); // Add the 'tbody' element to the table

    // Finally, append the table to the element with the id 'mountains'
    document.getElementById('mountains').appendChild(table);
}

// Call the function with the MOUNTAINS data
generateTable(MOUNTAINS);
