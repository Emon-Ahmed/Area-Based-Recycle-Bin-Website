import mongoose, { Schema } from "mongoose";

const districtSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const locationModel =
  mongoose.models?.location || mongoose.model("location", districtSchema);

export default locationModel;
