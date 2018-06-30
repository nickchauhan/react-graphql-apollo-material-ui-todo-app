var { User } = require("./../models/user");
const isLoggedIn = async (resolve, parent, args, ctx, info) => {
  var token = ctx.request.get("x-auth");
  var user = await User.findByToken(token);
  if (!user.error) {
    return resolve(user);
  }
  throw new Error("No User found");
};

module.exports = {
  isLoggedIn
};
