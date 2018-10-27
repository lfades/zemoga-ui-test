const { DateType } = require('./scalars');
/**
 * This resolvers handle the response of every GraphQL query we do to the API.
 * Just in case, everything here is made with promises.
 */
module.exports = {
  Query: {
    persons(root, args, { dataSources }) {
      return dataSources.persons.find();
    },
    person(root, { id }, { dataSources }) {
      return dataSources.persons.getById(id);
    }
  },
  Mutation: {
    vote(root, { personId, up }, { dataSources }) {
      return dataSources.persons.voteById({ id: personId, up });
    }
  },
  Date: DateType
};
