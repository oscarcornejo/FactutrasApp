// Dependencias
const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Database connection
mongoose.connect('mongodb+srv://dbuser:password@apifacturas-q01vt.gcp.mongodb.net/facturasContainer?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', (error) => {
    console.log('ERROR: ', error);
});

mongoose.connection.once('open', () => {
    console.log('Database is Working!');
});

// CONFIGURAR BODYPARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// static web server
app.use(express.static(path.join(__dirname, 'dist')));

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });

});


// RUTAS
app.use('/api/crear-factura', require('./routes/create.js'));
app.use('/api/obtener-factura', require('./routes/read.js'));
app.use('/api/actualizar-factura', require('./routes/update.js'));
app.use('/api/eliminar-factura', require('./routes/delete.js'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

// PUERTO
app.listen(3000, () => {
    console.log('Server Ok!')
})