const { isLoggedIn } = require("../middleware/authenticate");

const permissions = {
  Query: {
    todos: isLoggedIn
  },
  Mutation: {
    createTodo: isLoggedIn,
    updateTodo: isLoggedIn,
    removeTodo: isLoggedIn
  }
};

module.exports = {
  permissions
};
