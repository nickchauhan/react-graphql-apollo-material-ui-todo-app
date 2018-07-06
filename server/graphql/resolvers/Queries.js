const { Todo } = require("../../models/todo");

const todos = async _ => {
  var user = _;
  return await Todo.find({
    _creator: user._id
  });
};

const getUser = async _ => {
  var user = _;
  return user;
};

module.exports = {
  todos,
  getUser
};
