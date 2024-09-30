// Bring in the DB connection and the Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// Read seed data from json file
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// delete any existing recors, then insert seed data
const seedDB = async () => {
    try {
        await Trip.deleteMany({});
        console.log('Existing trips deleted.');
        
        await Trip.insertMany(trips);
        console.log('Seed data inserted successfully.');
    } catch (error) {
        console.error('Error during seeding:', error);
        process.exit(1);
    }
};

// close the MongoDB connection and exit
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
});