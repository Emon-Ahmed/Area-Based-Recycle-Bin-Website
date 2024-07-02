import mongoose, { Schema } from "mongoose";

const ordersSchema = new Schema({
  price: {
    required: true,
    type: String,
  },
//   userModel: { type: Schema.ObjectId, ref: "users" },
//   productsModel: { type: Schema.ObjectId, ref: "products" },

});

export const ordersModel =
  mongoose.models.orders ?? mongoose.model("orders", ordersSchema);
