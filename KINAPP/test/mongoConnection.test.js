// TO BE RUN IN SHELL WITH COMMAND: node test/mongoConnection.js
const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the db before tests run
before((done) => {

    mongoose.connect('mongodb://localhost/kinapp');
    
    mongoose.connection.once('open', () => {
        console.log('Successful MongoDB connection');
        done();
    }).on('error', (error) => {
        console.log(`MongoDB connection has failed: ${error}`);
    });

});

// Drop db before each tests
beforeEach((done) => {

    // Drop the collection
    mongoose.connection.collections.test_patients.drop(() => {
        done();
    });

});