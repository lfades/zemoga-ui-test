const { DateType } = require('./scalars');
/**
 * This resolvers handle the response of every GraphQL query we do to the API.
 * Just in case, everything here is made with promises.
 */
module.exports = {
  Query: {
    people(root, args, { dataSources }) {
      return dataSources.people.find();
    },
    person(root, { id }, { dataSources }) {
      return dataSources.people.getById(id);
    }
  },
  Mutation: {
    vote(root, { personId, up }, { dataSources }) {
      return dataSources.people.voteById({ id: personId, up });
    },
    createPerson(root, { data }, { dataSources }) {
      return dataSources.people.create(data);
    },
    updatePerson(root, { data }, { dataSources }) {
      return dataSources.people.updateById(data);
    },
    removePerson(root, { id }, { dataSources }) {
      return dataSources.people.removeById(id);
    }
  },
  Date: DateType
};
