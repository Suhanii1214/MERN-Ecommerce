//cartController.js
import Cart from '../models/cart.js'
import Item from '../models/item.js'

export const get_cart_items = async (req, res) => {
    const userId = req.params.userId
    try{
        let cart = await Cart.findOne({userId})
        if(cart && cart.items.length>0) {
            res.send(cart)
        } else {
            res.send(null)
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Something went wrong")
    }
}

export const add_cart_item = async (req,res) => {
    const userId = req.params.id
    const {productId, quantity} = req.body

    try {
        let cart = await Cart.findOne({userId})
        let item = await Item.findOne({_id:productId})
        if(!item) {
            res.status(404).send('Item not found!')
        }
        const price = item.price
        const name = item.title
        const image = item.image

        if(cart) {
            //if cart exists for the user
            let itemIndex = cart.items.findIndex(p => p.productId == productId)

            if(itemIndex > -1) {
                let productItem = cart.items[itemIndex]
                productItem.quantity += quantity
                cart.items[itemIndex] = productItem
            } else {
                cart.items.push({productId, name, quantity, price, image})
            }
            cart.bill += quantity*price
            cart = await cart.save()
            return res.status(201).send(cart)
        } 
        else {
            //no cart exists, creat one
            const newCart = await Cart.create({
                userId,
                items: [{productId, name, quantity, price, image}],
                bill: quantity*price
            })
            return res.status(201).send(newCart)
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong")
    }
}

export const delete_item = async (req,res) => {
    const userId = req.params.userId
    const productId = req.params.itemIndex

    try {
        let cart = await Cart.findOne({userId})
        let itemIndex = cart.items.findIndex(p => p.productId == productId)
        if(itemIndex > -1) {
            let productItem = cart.items[itemIndex]
            cart.bill -= productItem.quantity*productItem.price
            cart.items.splice(itemIndex,1)
        }
        cart = await cart.save()
        return res.status(201).send(cart)
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong")
    }
}

const cartController = {get_cart_items, add_cart_item, delete_item}
export default cartController