import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import ENV from './config.js'
import { router as authRouter } from './routes/auth.js'
import Razorpay from 'razorpay'
import { itemRouter } from './routes/item.js'
import { orderRouter } from './routes/order.js'
import { cartRouter } from './routes/cart.js'

const app  = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api', authRouter)
app.use('/api', itemRouter)
app.use('/api', orderRouter)
app.use('/api', cartRouter)

// connecting to the database
const port = 4000
mongoose.connect(ENV.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(port, () => console.log(`Server running on port ${port}`)))
.catch((err) => console.log(err))