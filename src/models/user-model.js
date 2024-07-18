import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  image: {
    required: false,
    type: String,
  },
  isAdmin: {
    required: false,
    default: false,
    type: Boolean,
  },
  isSeller: {
    required: false,
    default: false,
    type: Boolean,
  },
  createdOn: {
    required: true,
    default: Date.now(),
    type: Date,
  },
  modifiedOn: {
    required: true,
    default: Date.now(),
    type: Date,
  },
});

export const userModel =
  mongoose.models.users ?? mongoose.model("users", userSchema);
