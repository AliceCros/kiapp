const bodyParser = require('body-parser');
const Patient = require('../models/patient');
const DossierController = require('./dossierController');

let currentId;

module.exports = (app, urlencodedParser) => { //export de toutes les fonctions

    // Tell to system we want json to be used
    app.use(bodyParser.json());

    // Récupération de tous les patients
    // -------> Méthode validée <--------
    app.get('/api/patient', (req, res, next) => {
        Patient.find(req.body)
               .then((patient) => {
                    res.send(patient);
                    console.log(patient);
               })
               .catch(next);     
    });

    // Création d'un patient
    // -------> Méthode validée <--------
    app.post('/api/patient', (req, res, next) => {
        Patient.create(req.body)
               .then((patient) => {
                  res.send(patient);
                  console.log(patient);
                  currentId = patient._id;
                  DossierController.getId(currentId); // Export du dernier id créé dans dossierController
                })
               .catch(next);
    });

    // Modification d'un patient donné
    // -------> Méthode vérifiée <--------
    app.put('/api/patient/:idPatient', urlencodedParser, (req, res, next) => {
        let patientId = req.params.idPatient;
        Patient.findByIdAndUpdate({_id: patientId}, req.body)
                .then((patient) => {
                    res.send(patient);
                }).catch(next);
    });

    // Suppression d'un patient donné
    // ----> Méthode vérifiée <-----
    app.delete('/api/patient/:idPatient', urlencodedParser, (req, res, next) => {
        let patientId = req.params.idPatient;
        Patient.findByIdAndRemove({_id: patientId})
                .then((patient) => {
                    console.log(`patient id: ${patient._id}`);
                    res.send(patient);
                }).catch(next);
    });

};