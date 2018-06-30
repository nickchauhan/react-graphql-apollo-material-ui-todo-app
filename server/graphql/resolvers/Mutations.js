const { Todo } = require("../../models/todo");
const { User } = require("../../models/user");

const createTodo = async (_, { task }) => {
  var user = _;
  var todo = new Todo({ task: task, completed: false, _creator: user._id });
  await todo.save();
  return todo;
};

const updateTodo = async (_, { id, complete }) => {
  var todo = await Todo.findByIdAndUpdate(id, { completed: complete });
  var ID = todo.id;
  var updatedTodo = await Todo.findById(ID);
  return updatedTodo.completed;
};

const removeTodo = async (_, { id }) => {
  var todo = await Todo.findByIdAndRemove(id);
  return todo;
};

const createUser = async (_, { name, email, password }) => {
  var user = await new User({ name, email, password });

  var newUser = await user.save();
  var AuthToken = await user.generateAuthToken();

  return {
    id: newUser._id,
    email: newUser.email,
    authToken: AuthToken
  };
};

module.exports = {
  createTodo,
  updateTodo,
  removeTodo,
  createUser
};
