// expressServer.js
const express = require('express'); // Importerer Express-modulet.
const fs = require('fs').promises; // Importerer Node.js' file system-modulet med promises for asynkron brug.
const path = require('path'); // Importerer Node.js' path-modulet for stihåndtering.
const app = express(); // Opretter en ny Express-applikation.

// Funktion til at generere HTML-links for hver fil i den angivne mappe.
function genererLinks(filnavne) {
    let html = ''; // Starter med en tom HTML-streng.
    for (let filnavn of filnavne) { // Looper igennem hvert filnavn i listen.
        // Tilføjer et HTML-link for hver fil. Bruger encodeURIComponent til at sikre korrekt URL-kodning.
        html += '<a href="/filer/' + encodeURIComponent(filnavn) + '">' + filnavn + '</a><br>\n';
    }
    return html; // Returnerer den færdige HTML-streng.
}

// Håndterer rod-URL'en '/' med en GET-anmodning.
app.get('/', async (req, res) => {
    try {
        // Læser filnavne fra 'filer'-mappen i serverens nuværende mappe.
        let filnavne = await fs.readdir(path.join(__dirname, 'filer'));
        // Genererer HTML-links baseret på de læste filnavne.
        let html = genererLinks(filnavne);
        // Sender den genererede HTML som respons.
        res.send(html);
    } catch (e) {
        // Sender en HTTP 500 serverfejl, hvis der opstår en fejl under filhåndtering.
        res.status(500).send(e.message);
    }
});

// Håndterer anmodninger for at hente filer fra 'filer' mappen.
app.get('/filer/:navn', async (req, res) => {
    try {
        // Opbygger stien til den anmodede fil baseret på URL-parameteren 'navn'.
        let sti = path.join(__dirname, 'filer', req.params.navn);
        // Læser den anmodede fil.
        let filData = await fs.readFile(sti);
        // Sender filens indhold som respons.
        res.send(filData);
    } catch (e) {
        // Sender en HTTP 404 Not Found, hvis filen ikke findes eller der sker en fejl.
        res.status(404).send(e.message);
    }
});

// Starter serveren på port 8080.
app.listen(8080, () => {
    console.log('Lytter på port 8080 ...'); // Logger til konsollen, når serveren starter.
});




element.onclick = () => { /* event handling code here */ };

element.onclick = (event) => {
    console.log(event.currentTarget);
    event.stopPropagation();
};

