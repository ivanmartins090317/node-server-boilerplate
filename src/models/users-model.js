const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
