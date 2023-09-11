import mongoose, { Schema } from "mongoose";

const pizza = new Schema({
  name: { type: String, trim: true, required: true },
  price: { type: Number, required: true },
  ingredients: [{ type: String }],
  shopId: { type: Schema.Types.ObjectId,
    ref: "shop",
    required: true},
  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date },
});
pizza.index({name: 1, shopId: 1})
export default mongoose.model("pizza", pizza);