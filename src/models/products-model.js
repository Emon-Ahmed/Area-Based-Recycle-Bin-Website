import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema({
  productName: {
    required: true,
    type: String,
  },
  productDescription: {
    required: false,
    type: String,
  },
//   productCategory: {
//     required: false,
//     type: String,
//   },
  productPrice: {
    required: false,
    type: String,
  },
//   productLocation: {
//     required: false,
//     type: String,
//   },
  productImage: {
    required: false,
    type: String,
  },
});

export const productsModel =
  mongoose.models.products ?? mongoose.model("products", productsSchema);
