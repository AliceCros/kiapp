/******** IMPORT NODE_MODULES ********/
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/******** IMPORT CONTROLLERS ********/
const patientController = require('./controllers/patientController');
const dossierController = require('./controllers/dossierController');

// Initialisation du serveur
const app = express();
const PORT = process.env.PORT || 4000;

// Initialisation du middleware body-parser
const urlencodedParser = bodyParser.urlencoded({extended: false});

// Gestion des erreurs [Middleware]
app.use((err, req, res, next) => {
    res.status(422).send({err: err.message});
});

// Connexion à MongoDB
mongoose.connect('mongodb://mourad:azerty123456@ds161740.mlab.com:61740/kinapp');
//mongoose.connect('mongodb://localhost/kinapp');

mongoose.connection.once('open', () => {
    console.log('Successful MongoDB connection');
}).on('error', (error) => {
    console.log(`MongoDB connection has failed: ${error}`);
});

// Appels des controllers
patientController(app, urlencodedParser);
dossierController.HttpMethods(app, urlencodedParser);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})