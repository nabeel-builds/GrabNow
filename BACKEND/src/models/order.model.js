const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },

    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true, },
            qty: { type: Number, required: true, min: 1, },
            price: { type: Number, required: true },
        }
    ],

    totalAmount: {
        type: Number,
        required: true,
    },

    address: {
        fullName: { type: String, required: true },
        street: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: Number, required: true }
    },

    paymentId: { type: String},

    status: {
        type: String,
        enum: [
            "Pending", "Shipped", "Delivered"
        ],
        default: "Pending"
    }

}, { timestamps: true })

const orderModal = mongoose.model("order", orderSchema)

module.exports = orderModal