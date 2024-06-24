const express = require("express");
const app = express(); // Opretter en ny Express-applikation.

const userUrl = "https://jsonplaceholder.typicode.com/users";


async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

function generateTable(users) {
    let html = '<table>';
    users.forEach(user => {
        html +=
            '<tr><td>' + user.id +
            '</td><td>' + user.name +
            '</td><td>' + user.company.name +
            '</td></tr>\n';
    });
    html += '</table>';
    return html;
}

app.get('/', async (req, res) => {
    try {
        let users = await get(userUrl);
        console.log(users);
        let html = generateTable(users);
        res.send(html);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(8080, () => {
    console.log('Lytter på port 8080 ...'); // Logger til konsollen, når serveren starter.
});
