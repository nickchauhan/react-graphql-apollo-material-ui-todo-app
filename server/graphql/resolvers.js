const { todos, loginUser } = require("./resolvers/Queries");
const {
  createTodo,
  removeTodo,
  updateTodo,
  createUser
} = require("./resolvers/Mutations");

const resolvers = {
  Query: {
    todos,
    loginUser
  },
  Mutation: {
    createTodo,
    updateTodo,
    removeTodo,
    createUser
  }
};

module.exports = {
  resolvers
};
