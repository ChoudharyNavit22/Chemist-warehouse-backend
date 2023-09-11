import mongoose, { Schema } from "mongoose";

const topping = new Schema({
  name: { type: String, trim: true, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date },
});

export default mongoose.model("topping", topping);