import mongoose from "mongoose";
import validator from "validator";
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

export default mongoose.model("users", userSchema);
