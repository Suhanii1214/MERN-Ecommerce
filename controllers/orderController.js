import Order from '../models/order.js'
import Cart from '../models/cart.js'
import User from '../models/user.js'
import stripe from 'stripe'
import Razorpay from 'razorpay'
import ENV from '../config.js'


export const razorpay = new Razorpay({
    key_id: ENV.RAZORPAY_API_KEY,
    key_secret: ENV.RAZORPAY_SECRET_KEY
})

export const get_orders = async (req, res) => {
    const userId = req.params.userId
    Order.find({userId}).sort({date:-1}).then(orders => res.json(orders))
}

export const checkout = async (req, res) => {
    try {
        const { userId, items, bill } = req.body;

        // Create order in your database
        const newOrder = new Order({
            userId,
            items,
            bill,
        });
        const savedOrder = await newOrder.save();

        // Create a Razorpay order
        const razorpayOrder = await razorpay.orders.create({
            amount: bill * 100, // Razorpay accepts amount in paisa, so multiply by 100
            currency: 'INR', // Update with your currency
            receipt: savedOrder._id, // Unique identifier for the order
            payment_capture: 1, // Automatically capture payment when order is created
        });

        res.json({
            orderId: razorpayOrder.id,
            amount: razorpayOrder.amount,
            currency: razorpayOrder.currency,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

}

const orderController = { get_orders, checkout}
export default orderController