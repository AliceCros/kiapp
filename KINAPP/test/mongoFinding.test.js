/**
 * RUN WITH MOCHA EVEN IF THERE IS NO MOCHA IMPORT
 * Testing: in shell add command as follows - npm run test-serve (see package.json)
 */

// IMPORTS
const assert = require('assert');
const TestPatient = require('../models/patient.test');

// Describe tests
describe('Finding patients', () => {

    let testPatient;

    beforeEach((done) => {
        testPatient = new TestPatient({
            frontId: TestPatient.length,
            name: 'Layne',
            surname: "Arnold",
            socialSecurityNumber: "134576789013",
            birthd: "1951-04-12",
            adress: "18 rue Baron 75017 Paris", 
            phoneNumber: "0754378571", 
            mail: "arnold-layne@post.co.uk",
            files : []
        });
        
        testPatient.save().then(() => {
            done();
        });
    });

    it('Finds one patient from the database', (done) => {

        TestPatient.findOne({name: 'Layne'}).then((result) => {
            assert(result.name === 'Layne');
            done();
        });
    });

    it('Finds one patient by id from the database', (done) => {

        TestPatient.findOne({_id: testPatient._id}).then((result) => {
            assert(result._id.toString() === testPatient._id.toString());
            done();
        });
    });

});