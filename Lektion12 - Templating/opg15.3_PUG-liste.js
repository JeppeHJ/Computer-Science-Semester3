const express = require("express");
const app = express();
app.set('view engine', 'pug');



const userUrl = 'https://randomuser.me/api/?nat=dk&results=100';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

app.get('/', async (req, res) => {
    try {
        let users = await get(userUrl);
        console.log(users.results);
        res.render('opg15.3_PUG', { users: users});
    } catch (error) {6
        res.status(500).send(error.message);
    }
})

app.listen(8080, () => {
    console.log('Lytter på port 8080 ...');
});