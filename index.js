import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema.js';
import { Query, Product, Category, Mutation } from './resolvers/index.js';
import {data} from './data.js';

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Product, Category, Mutation },
  context: {
    data,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
