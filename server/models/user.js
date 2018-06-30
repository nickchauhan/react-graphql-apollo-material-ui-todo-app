const validator = require("validator");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcryptjs");

process.env.JWT_SECRET = "secretJWT";

// Schema for Users
var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trime: true,
    required: [true, "Name is Required"]
  },
  email: {
    type: String,
    trim: true,
    required: [true, "User email id required"],
    minlength: 5,
    unique: true,
    validate: {
      validator: validator.isEmail,
      // validator: function(v) {
      //   var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      //   return emailRegex.test(v);
      // },
      message: "{VALUE} is not a valid email id!"
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [
    {
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }
  ]
});

// Static are used on Model
UserSchema.static("findByToken", async function(token) {
  var User = this;
  var decoded;
  try {
    decoded = await jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    // return Promise.reject();
    return {
      error: "User not found"
    };
  }
  return await User.findOne({
    _id: decoded._id,
    "tokens.token": token,
    "tokens.access": decoded.access
  });
});

UserSchema.static("findByCrendentials", function(email, password) {
  // console.log(email, password);
  return User.findOne({ email }).then(usr => {
    if (!usr) {
      return Promise.reject("User not found");
    }

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, usr.password, (err, response) => {
        if (response) {
          resolve(usr);
        } else {
          reject("User password doesn't match");
        }
      });
    });
    c;
  });
});

//To hash the password
UserSchema.pre("save", function(next) {
  var user = this;
  if (user.isModified("password")) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// Add methods (are used on user instances) to the User Model
UserSchema.methods.toJSON = function() {
  var user = this;
  var userObject = user.toObject();
  return _.pick(userObject, ["_id", "email"]);
};

UserSchema.methods.generateAuthToken = function() {
  var user = this;
  var access = "auth";
  var token = jwt
    .sign({ _id: user._id.toHexString(), access }, process.env.JWT_SECRET)
    .toString();
  user.tokens.push({ access, token });
  return user.save().then(() => token);
};

UserSchema.methods.removeToken = function(token) {
  var user = this;
  return user.update({
    $pull: {
      tokens: {
        token
      }
    }
  });
};
// Creating the Schema
var User = mongoose.model("Users", UserSchema);

module.exports = {
  User
};
