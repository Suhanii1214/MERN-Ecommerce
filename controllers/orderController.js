import Order from '../models/order.js'
import Cart from '../models/cart.js'
import User from '../models/user.js'
import config from 'config'
import stripe from 'stripe'


export const get_orders = async (req, res) => {
    const userId = req.params.userId
    Order.find({userId}).sort({date:-1}).then(orders => res.json(orders))
}

export const checkout = async (req, res) => {
    try {
        const userId = req.params.id;
        const {source} = req.body
        let cart = await Cart.findOne({userId})
        let user = await User.findOne({_id: userId})
        const email = user.email
        if (cart) {
            const charge = await stripe.ChargesResource.create({
                amount: cart.bill,
                currency: 'inr',
                source: source,
                receipt_email: email
            })
            if(!charge) throw Error('Payment failed')
            if(charge) {
                const order = await Order.create({
                    userId,
                    items: cart.items,
                    bill: cart.bill
                })
                const data = await Cart.findByIdAndDelete({_id:cart.id})
                return res.status(201).send(order)
            }
        } else {
            res.status(500).send("You do not have items in cart")
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Somehting went wrong")
    }
}

const orderController = { get_orders, checkout}
export default orderController