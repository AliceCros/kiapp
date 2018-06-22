const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Patient = require('../models/patient');

let getNewId;

// Import de l'id courant pour post dossier
module.exports.getId = (id) => {
    console.log(`into dossierController: ${id}`)
    return getNewId = id;
}

module.exports.HttpMethods = (app, urlencodedParser) => { //export de toutes les fonctions
    
    // Tell to system we want json to be used
    app.use(bodyParser.json());

    app.get('/api/patient/dossier', (req, res, next) => {
        Patient.find({}, {files: 1})
               .then((patient) => {
                   res.send(patient);
               }).catch(next);
    });

    // Récupération de tous les dossiers d'un patient
    app.get(`/api/dossier/:idPatient`, (req, res, next) => {
        Patient.findById({id: this.id})
               .then((patient) => {
                   res.send(patient.files);
                   console.log(patient.files);
               }).catch(next);
    });

    // Récupération d'un dossier d'un patient donné
    /*
    app.get('/api/dossier/:idPatient/:idDossier', (req, res, next) => {
        Patient.findById(req.params.idPatient)
               .then((patient) => {
                   res.send(patient.files);
                   console.log(patient.files);
               }).catch(next);
    });
    */

    // Création du premier dossier d'un patient
    // -------> Méthode validée <--------
    app.post('/api/dossier', (req, res, next) => {
        console.log(getNewId);
        Patient.findByIdAndUpdate({_id: mongoose.Types.ObjectId(getNewId)}, {files: [req.body]})
               .then((file) => {
                   res.send(file);
                   console.log(file);
               }).catch(next);
    });

    // (Ajout et ?) Modification d'un dossier donné
    app.put('/api/dossier/:idDossier', (req, res, next) => {
        Patient.findOneAndUpdate({frontId: req.params.idDossier}, {files: [req.body]})
            .then((files) => {
                res.send(files);
                console.log(files);
            }).catch(next);
    });

    // app.get('/api/patient/2', (req, res, next) => {
    //     Patient.find({}, {files: 1})
    //            .then((patient) => {
    //                res.send(patient);
    //            }).catch(next);
    // });



    // Suppression d'un dossier donné
    app.delete('/api/patient/:idPatient:idDossier', urlencodedParser, (req, res) => {
        let patientId = req.params.idPatient;
        let dossierId = req.params.idDossier;
        let dossier = req.body;
        res.json(dossier);
    });
    
};