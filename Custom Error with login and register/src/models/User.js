const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false, // hidden by default
  },
  type: {
    type: String,
    default: "user",
  },
});

module.exports = mongoose.model("Users", UserSchema);
