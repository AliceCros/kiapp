/**
 * RUN WITH MOCHA EVEN IF THERE IS NO MOCHA IMPORT
 * Testing: in shell add command as follows - npm run test-serve (see package.json)
 */

// IMPORTS
const assert = require('assert');
const TestPatient = require('../models/patient.test');

// Describe tests
describe('Updating patients', () => {

    let testPatient;

    beforeEach((done) => {
        testPatient = new TestPatient({
            name: 'Layne',
            firstName: "Arnold",
            socialSecurityNumber: "134576789013", 
            address: "18 rue Baron 75017 Paris", 
            phoneNumber: "0754378571", 
            email: "arnold-layne@post.co.uk"
        });
        
        testPatient.save().then(() => {
            done();
        });
    });

    it('Updates one patient by id in the database', (done) => {

        TestPatient.findByIdAndUpdate({_id: testPatient._id}, {email: 'arnold-layne@strange.hobbie.com'}).then(() => {
            TestPatient.findById({_id: testPatient._id}).then((result) => {
                assert(result.email === 'arnold-layne@strange.hobbie.com');
                done();
            });
        });
    });

});