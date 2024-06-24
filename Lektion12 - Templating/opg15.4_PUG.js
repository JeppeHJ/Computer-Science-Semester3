const express = require("express");
const app = express();

// Sætter Pug som skabelonmotoren for Express.
app.set('view engine', 'pug');

// Liste over gyldige nationaliteter
const validNationalities = ['gb', 'dk', 'de', 'fr'];

app.get('/', (req, res) => {
    try {
        // Hent argumenterne fra query-parametre
        const nationality = req.query.nationality;
        const numResults = parseInt(req.query.numResults);

        // Valider nationaliteten
        if (!validNationalities.includes(nationality)) {
            return res.status(400).send("Ugyldig nationalitet. Vælg mellem 'gb', 'dk', 'de', 'fr'.");
        }

        // Valider antallet af resultater
        if (isNaN(numResults) || numResults < 10 || numResults > 100) {
            return res.status(400).send("Antallet af resultater skal være mellem 10 og 100.");
        }

        // Her ville du hente brugerdata baseret på de givne kriterier...
        // For nu, bruger vi bare et statisk 'randomUsers' array som eksempel
        let randomUsers = [
            // Erstat med dine faktiske brugerobjekter
            { username: "bruger123", age: 29, color: "blå", nationality: "de" },
            { username: "bruger1234", age: 30, color: "blå", nationality: "dk" },
            { username: "bruger12345", age: 31, color: "blå1", nationality: "gb" }
        ];

        // Renderer skabelonen med brugerdata
        res.render('users', { users: randomUsers });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(8080, () => {
    console.log('Lytter på port 8080 ...');
});
