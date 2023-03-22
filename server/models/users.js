var mongoose = require("mongoose");
const validator = require("validator");
var userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
  name: {
    type: String,
    max: 30,
    min: 3,
  },
  password: {
    type: String,
    required: true,
    max: 50,
    min: 6,
  },
});

module.exports = mongoose.model("users", userSchema);
