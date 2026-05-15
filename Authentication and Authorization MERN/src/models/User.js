const mongoose = require("mongoose");
const argon2 = require("argon2");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: [true, "First name is required."],
  },
  last_name: {
    type: String,
    required: [true, "Last name is required."],
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email address is required."],
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    select: false, // hidden by default.
  },
  contact_information: {
    type: Number,
    required: [true, "Contact information is required."],
    unique: true,
  },
});

// password hash before storing
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await argon2.hash(this.password);
  // next();
});

module.exports = mongoose.model("User", userSchema);
