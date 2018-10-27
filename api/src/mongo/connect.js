const mongoose = require('mongoose');
const { DEBUG_MODE, MONGO_URL } = require('../configs');
const Person = require('./Person');
const persons = require('./persons.json');

async function createFirstPersons() {
  // Ignore this if there are persons in the db
  if (await Person.countDocuments()) return;

  console.log('Creating first persons...');

  await Person.insertMany(persons);
}

module.exports = () => {
  mongoose.set('debug', DEBUG_MODE);

  mongoose
    .connect(
      MONGO_URL,
      {
        // If mongoose loses connection to the server it will try to reconnect
        // every second (reconnectInterval: 1000)
        reconnectTries: Number.MAX_VALUE,
        useNewUrlParser: true,
        autoIndex: false
      }
    )
    .then(() => {
      console.log('mongoose ready');

      createFirstPersons();
    })
    .catch(console.error.bind(console, 'mongoose connection error:'));
};
