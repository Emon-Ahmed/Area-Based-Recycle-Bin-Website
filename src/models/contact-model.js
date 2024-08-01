import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  fname: {
    required: true,
    type: String,
  },
  lname: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  message: {
    required: true,
    type: String,
  },
  createdOn: {
    required: true,
    default: Date.now(),
    type: Date,
  },
});

export const contactModel =
  mongoose.models.contact ?? mongoose.model("contact", contactSchema);
