const express = require("express");
const app = express();

// Sætter Pug som skabelonmotoren for Express.
// Dette betyder, at når vi render visninger, vil Express lede efter .pug filer.
app.set('view engine', 'pug');

let randomUser1 = {
    username: "bruger123", 
    age: 29,              
    color: "blå",
    nationality: "de"      
};

let randomUser2 = {
    username: "bruger1234", 
    age: 30,              
    color: "blå",
    nationality: "dk"        
};

let randomUser3 = {
    username: "bruger12345", 
    age: 31,              
    color: "blå1",
    nationality: "gb"          
};

let randomUsers = [];

randomUsers.push(randomUser1);
randomUsers.push(randomUser2);
randomUsers.push(randomUser3);

app.get('/', (req, res) => {
    try {
        // Renderer 'users' skabelonen (users.pug) og sender 'randomUser' objektet med til skabelonen.
        // I Pug-skabelonen vil vi have adgang til 'user'-variablen, som vil indeholde data fra 'randomUser'.
        res.render('opg15.1_PUG', { users: randomUsers });
    } catch (error) {
       
        res.status(500).send(error.message);
    }
});

app.listen(8080, () => {
    console.log('Lytter på port 8080 ...');
});
