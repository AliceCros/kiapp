const mongoose = require('mongoose');
const assert = require('assert');
const TestPatient = require('../models/patient');

describe('Nesting file', () => {

    it('Creates a patient with sub-documents', (done) => {

        // Delete files objects before each test
        beforeEach((done) => {
            mongoose.connection.collections.files.drop(() => {
                done();
            });
        });

        let testPatient = new TestPatient({
            name: 'Layne',
            surname: "Arnold",
            socialSecurityNumber: "134576789013", 
            adress: "18 rue Baron 75017 Paris", 
            phoneNumber: "0754378571", 
            mail: "arnold-layne@post.co.uk",
            files: {pathologie: 'back', observation: 'sciatique'}
        });
            
        testPatient.save().then(() => {
            TestPatient.findById({_id: testPatient._id}).then((result) => {
                assert(result.files.length === 1);
                done();
            });
        });

    });


    it('Adds a book to an author', (done) => {

        let testPatient = new TestPatient({
            name: 'Layne',
            firstName: "Arnold",
            socialSecurityNumber: "134576789013", 
            address: "18 rue Baron 75017 Paris", 
            phoneNumber: "0754378571", 
            email: "arnold-layne@post.co.uk",
            files: {pathologie: 'back', observation: 'sciatique'}
        });
            
        testPatient.save().then(() => {
            TestPatient.findById({_id: testPatient._id}).then((record) => {
                // Add a file to the files array
                record.files.push({pathologie: 'leg', observation: 'broken'});
                record.save().then(() => {
                    TestPatient.findById({_id: testPatient._id}).then((result) => {
                        assert(result.files.length === 2);
                        done();
                    });
                });
            });
        });

    });

});