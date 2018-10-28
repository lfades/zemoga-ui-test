const Person = require('./mongo/Person.js');
/**
 * This data source is in charge of handling every operation over Person,
 * and it should only be used by GraphQL resolvers
 */
class People {
  constructor() {
    this.model = Person;
  }

  // apollo-server will use this
  initialize(config) {
    this.context = config.context;
    this.cache = config.cache;
  }

  getById(_id) {
    return this.model.findOne({ _id });
  }

  find() {
    return this.model.find();
  }

  voteById({ id, up }) {
    return this.model.findOneAndUpdate(
      { _id: id },
      { $set: { [up ? 'votesUp' : 'votesDown']: 1 } },
      { new: true }
    );
  }
}

module.exports = () => ({
  people: new People()
});
