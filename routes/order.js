import { Router } from "express";
import orderController from '../controllers/orderController.js'

export const orderRouter = Router()

orderRouter.get('/order/:id', orderController.get_orders)
orderRouter.post('/order/checkout/:id', orderController.checkout)