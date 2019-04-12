const express = require('express');
const app = express();

const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname * '/views/parciales');
app.set('view engine', 'hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().setFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    return new Date().setFullYear();
});

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Antonio',
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});