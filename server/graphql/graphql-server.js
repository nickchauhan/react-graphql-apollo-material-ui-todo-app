const { GraphQLServer } = require("graphql-yoga");
const { makeExecutableSchema } = require("graphql-tools");
const { applyMiddleware } = require("graphql-middleware");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const { permissions } = require("./permissions");

const schema = makeExecutableSchema({ typeDefs, resolvers });
const protectedSchema = applyMiddleware(schema, permissions);

const server = new GraphQLServer({
  schema: protectedSchema,
  context: req => ({ ...req })
});

const options = { port: 4000 };

module.exports = {
  server,
  options
};
