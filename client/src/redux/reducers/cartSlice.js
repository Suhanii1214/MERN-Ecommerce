//cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: null,
    loading: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        getCart: (state, action) => {
            state.cart = action.payload
            state.loading = false
        },
        addToCart : (state, action) => {
            state.cart = action.payload
        },
        deleteFromCart: (state, action) => {
            state.cart = action.payload
        },
        cartLoading: (state) => {
            state.loading = true
        }
    }
})

export const { getCart, addToCart, deleteFromCart, cartLoading } = cartSlice.actions

export default cartSlice.reducer