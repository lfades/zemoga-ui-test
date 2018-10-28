const Person = require('./mongo/Person.js');
/**
 * This data source is in charge of handling every operation over Person,
 * and it should only be used by GraphQL resolvers
 *
 * All methods are using async even though await isn't used because
 * mongoose's methods don't return a real Promise
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

  async getById(_id) {
    return this.model.findOne({ _id });
  }

  async find() {
    return this.model.find();
  }

  async create(data) {
    return this.model.create(data);
  }

  async updateById({ id, ...data }) {
    return this.model.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { new: true }
    );
  }

  async voteById({ id, up }) {
    return this.model.findOneAndUpdate(
      { _id: id },
      { $inc: { [up ? 'votesUp' : 'votesDown']: 1 } },
      { new: true }
    );
  }

  async removeById(_id) {
    return this.model.findOneAndDelete({ _id });
  }
}

module.exports = () => ({
  people: new People()
});
