///////////////////////////////////
// IMPORT SCHEMA AND MODEL
///////////////////////////////////
const { Schema, model } = require("mongoose");

////////////////////////////////////
// CREATE SCHEMA
////////////////////////////////////

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: {type: Number, default: 999},
  identity: {type: String, default: 'N/A'},
  aboutMe: {type: String, defauly: 'N/A'}
});

////////////////////////////////////
// CREATE MODEL
////////////////////////////////////
const User = model("user", userSchema);

////////////////////////////////////
// EXPORT MODEL
////////////////////////////////////
module.exports = User;
