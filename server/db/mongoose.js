const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/MERN_todoApp");

module.exports = {
  mongoose
};
