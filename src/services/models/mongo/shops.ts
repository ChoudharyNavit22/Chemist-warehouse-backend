import mongoose, { Schema } from "mongoose";

const shop = new Schema({
  name: { type: String, trim: true, required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date },
});
shop.index({name: 1, location: 1})
export default mongoose.model("shop", shop);