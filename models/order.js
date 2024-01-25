import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: "user"
    },
    items: [{
        productId: {
            type: String,
            ref: "item"
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less then 1.']
        },
        price: Number
    }],
    bill: {
        type: Number,
        required: true
    },
    razorpay_order_id: {
        type: String,
        required: true,
    },
      razorpay_payment_id: {
        type: String,
        required: true,
    },
      razorpay_signature: {
        type: String,
        required: true,
    },
    date_added: {
        type: Date,
        default: Date.now
    }
})

const OrderModel = mongoose.model("Order", OrderSchema)
export default OrderModel