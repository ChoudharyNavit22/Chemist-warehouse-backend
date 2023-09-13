import mongoose, { Schema } from "mongoose";
import Config from "../../../config"

const order = new Schema({
    customerName: { type: Schema.Types.String,trim: true, required: true},
    customerAddress: {type: Schema.Types.String,trim: true, required: true},
    customerPhone: {type: Schema.Types.String,trim: true, required: true},
    pizzaId: { type: Schema.Types.ObjectId,
        ref: "pizza",
        required: true},
    shopId: { type: Schema.Types.ObjectId,
        ref: "shop",
        required: true},
    amount: { type: Schema.Types.Number, required: true},
    orderStatus: {
        type: String, enum: Object.values(Config.APP_CONSTANTS.DATABASE.ORDER_STATUS), required: true, default: Config.APP_CONSTANTS.DATABASE.ORDER_STATUS.PENDING
    },
    createdAt: { type: Date, default: Date.now, required: true },
    updatedAt: { type: Date },
});
export default mongoose.model("order", order);