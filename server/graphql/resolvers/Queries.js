const { Todo } = require("../../models/todo");
const { User } = require("../../models/user");

const todos = async _ => {
  var user = _;
  return await Todo.find({
    _creator: user._id
  });
};

const loginUser = async (_, { email, password }) => {
  var LoginUser = await User.findByCrendentials(email, password);
  var token = await LoginUser.generateAuthToken();
  return {
    id: LoginUser._id,
    email: LoginUser.email,
    authToken: token
  };
};

module.exports = {
  todos,
  loginUser
};
