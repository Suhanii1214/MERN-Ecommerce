//cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    loading: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        getCart: (state, action) => {
            state.cartItems = action.payload
            state.loading = false
        },
        addToCart : (state, action) => {
            state.cartItems = action.payload
        },
        deleteFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id!==action.payload)
        },
        cartLoading: (state) => {
            state.loading = true
        }
    }
})

export const { getCart, addToCart, deleteFromCart, cartLoading } = cartSlice.actions

export default cartSlice.reducer