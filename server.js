const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');


const port = process.env.PORT || 3000;


//middleware
app.use(express.static(__dirname + '/public'));

// Express con HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    // enlazado con el HBS
    res.render('home', {
        nombre: 'fErnando',
        anyo: new Date().getFullYear()
    });
})

app.get('/about', (req, res) => {

    // enlazado con el HBS
    res.render('about', {
        anyo: new Date().getFullYear()
    });
})

app.get('/data', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})