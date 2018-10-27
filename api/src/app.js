const path = require('path');
const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const connectMongo = require('./mongo/connect');
const resolvers = require('./resolvers');
const dataSources = require('./dataSources');

const typeDefs = importSchema(path.join(__dirname, './Schema.graphql'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  cors: {
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['POST']
  },
  playground: {
    settings: {
      // possible values: 'line', 'block', 'underline'
      'editor.cursorShape': 'block',
      'request.credentials': 'include'
    }
  }
});

connectMongo();

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
