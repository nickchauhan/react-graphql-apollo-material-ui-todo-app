const { todos, getUser } = require("./resolvers/Queries");
const {
  createTodo,
  removeTodo,
  updateTodo,
  createUser,
  loginUser
} = require("./resolvers/Mutations");

const resolvers = {
  Query: {
    todos,
    getUser
  },
  Mutation: {
    createTodo,
    updateTodo,
    removeTodo,
    createUser,
    loginUser
  }
};

module.exports = {
  resolvers
};
