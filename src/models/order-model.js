import mongoose, { Schema } from "mongoose";

const ordersSchema = new Schema({
  price: {
    required: true,
    type: String,
  },
  user: {
    required: true,
    type: String,
  },
  userName: {
    required: true,
    type: String,
  },
  product: { type: Schema.ObjectId, ref: "products" },
  phone: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  payment: {
    required: true,
    type: String,
  },
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
