import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema({
  productName: {
    required: false,
    type: String,
  },
  productShortDescription: {
    required: false,
    type: String,
  },
  productDescription: {
    required: false,
    type: String,
  },
  productCategory: {
    required: false,
    type: String,
  },
  productPrice: {
    required: false,
    type: String,
  },
  productLocation: {
    required: false,
    type: String,
  },
  productImage: {
    required: false,
    type: String,
  },
  createdOn: {
    required: false,
    default: Date.now(),
    type: Date,
  },
  modifiedOn: {
    required: false,
    default: Date.now(),
    type: Date,
  },
});

export const productsModel =
  mongoose.models.products ?? mongoose.model("products", productsSchema);
