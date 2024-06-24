// Adding comments for tasks 4.1 to 4.5

// OPGAVE 4.1: Give all paragraphs, h1, and h2 elements a red text color using opgaver.css

// Loop over all paragraph elements and change their text color to red
for (let p of document.querySelectorAll('p')) {
    p.style.color = 'red';
}

// Loop over all h1 elements and change their text color to red
for (let h1 of document.querySelectorAll('h1')) {
    h1.style.color = 'red';
}

// Loop over all h2 elements and change their text color to red
for (let h2 of document.querySelectorAll('h2')) {
    h2.style.color = 'red';
}

// This section also applies the red color to all paragraphs using CSS class 'red'
let paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    p.classList.add('red');
});

// OPGAVE 4.2: Give the second element after each heading a brown color.

// Loop over all list items and change their text color to red
document.querySelectorAll('li').forEach((li) => {
    li.style.color = 'red';
});

// Change the color of the second paragraph to brown
document.querySelectorAll('p')[1].style.color = 'brown';

// Loop over all list items and change their text color to brown
for (let li of document.querySelectorAll('li')) {
    li.style.color = 'brown';
}

// Change the color of the seventh paragraph to brown
document.querySelectorAll('p')[6].style.color = "brown";

// Loop over each h1 element and change the color of the second following sibling to brown
let headings = document.querySelectorAll('h1');
headings.forEach(h => {
    let nextElement = h.nextElementSibling; // Get the next sibling of each heading
    if (nextElement) {
        let secondElement = nextElement.nextElementSibling; // Get the second following sibling
        if (secondElement) {
            secondElement.style.color = 'brown'; // Change the color to brown
        }
    }
});

// OPGAVE 4.3: Give every other element in the list a light grey background color.

// Loop through all list items and apply a light grey background to every other item
for (let i = 0; i < document.querySelectorAll('li').length; i++) {
    if (i % 2 === 0) { // Check if the index is even
        document.querySelectorAll('li')[i].style.backgroundColor = 'lightgrey';
    }
}

// OPGAVE 4.4: Turn the first paragraph after each heading into a subheading.

// Loop over all paragraph elements and turn every second paragraph and the first paragraph into an h2 element
let pElements = document.querySelectorAll('p');
for (let i = 0; i < pElements.length; i++) {
    if (i % 2 != 0 || i === 0) {
        let h2Element = document.createElement('h2');
        h2Element.innerHTML = pElements[i].innerHTML;
        pElements[i].parentNode.replaceChild(h2Element, pElements[i]);
    }
}

// Loop over each heading and apply a bold, larger font to the immediate next paragraph
headings.forEach(h => {
    let nextElement = h.nextElementSibling;
    if (nextElement && nextElement.tagName === 'P') {
        nextElement.style.fontSize = '1.5em';
        nextElement.style.fontWeight = 'bold';
    }
});

// OPGAVE 4.5: Give each heading an ID and insert a link to each heading at the top of the webpage.

// Select all h1 and h2 elements
let hElements = document.querySelectorAll('h1, h2');

// Create a container element at the top of the body to hold the links
let linkContainer = document.createElement('div');
document.body.insertBefore(linkContainer, document.body.firstChild); // Insert it at the top of the body

// Loop over each heading element, assign a unique ID and create a corresponding anchor element
hElements.forEach((hElement, index) => {
    hElement.id = 'id' + index; // Assign a unique ID

    let aElement = document.createElement('a'); // Create a new anchor element
    aElement.setAttribute('href', '#id' + index); // Set the href attribute
    aElement.textContent = 'Link to Section ' + (index + 1); // Set the text content

    linkContainer.appendChild(aElement); // Add the anchor to the link container
    linkContainer.appendChild(document.createTextNode(' ')); // Add a space for readability
});
