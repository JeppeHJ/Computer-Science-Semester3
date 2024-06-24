const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const port = 8080;

// Middleware til at parse JSON og serve statiske filer
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Session konfiguration
app.use(session({
    secret: 'din hemmelige nøgle',
    resave: false,
    saveUninitialized: true
}));

// Pug konfiguration
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Dummy produkter
let productsList = [
    { id: 1, name: "Produkt 1" },
    { id: 2, name: "Produkt 2" }
    // flere produkter...
];

// Routes
app.get('/index', (req, res) => {
    res.render('index', { products: productsList, cart: req.session.cart || [] });
});

app.post('/buy', (req, res) => {
    const { id } = req.body;
    if (!req.session.cart) {
        req.session.cart = [];
    }
    req.session.cart.push(id);
    res.status(201).send('Produkt tilføjet til kurv');
});

app.listen(port, () => {
    console.log(`Server kører på http://localhost:${port}`);
});
