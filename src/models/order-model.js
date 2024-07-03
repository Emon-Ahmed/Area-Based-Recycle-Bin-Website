import mongoose, { Schema } from "mongoose";
import { userModel } from "./user-model";
import { productsModel } from "./products-model";

const ordersSchema = new Schema({
  price: {
    required: false,
    type: String,
  },
  user: {
    required: false,
    type: String,
  },
  // product : {
  //   required: false,
  //   type: String,
  // }
  // user: { type: Schema.ObjectId, ref: "users" },
  product: { type: Schema.ObjectId, ref: "products" },

  active: {
    required: true,
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

export const ordersModel =
  mongoose.models.orders ?? mongoose.model("orders", ordersSchema);
