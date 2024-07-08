import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    required: true,
    type: String,
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

export const categoryModel =
  mongoose.models.category ?? mongoose.model("category", categorySchema);
