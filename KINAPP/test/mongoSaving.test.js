/**
 * RUN WITH MOCHA EVEN IF THERE IS NO MOCHA IMPORT
 * Testing: in shell add command as follows - npm run test-serve (see package.json)
 */

// IMPORTS
const assert = require('assert');
const TestPatient = require('../models/patient.test');

// Describe tests
describe('Saving patients', () => {

    // Create tests
    it('Saves one patient to the database', (done) => {

        let testPatient = new TestPatient({
            name: 'Layne',
            firstName: "Arnold",
            socialSecurityNumber: "134576789013", 
            address: "18 rue Baron 75017 Paris", 
            phoneNumber: "0754378571", 
            email: "arnold-layne@post.co.uk"
        });
        
        testPatient.save().then(() => {
            assert(testPatient.isNew === false);
            done();
        });
    });

});