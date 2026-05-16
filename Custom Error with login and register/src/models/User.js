const mongoose = require("mongoose");
const argon2 = require("argon2");

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
    enum: ["user", "admin", "moderator"],
  },
});

// password hash before creating new user.
UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await argon2.hash(this.password);
});

module.exports = mongoose.model("Users", UserSchema);
