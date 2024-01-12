import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    loading: false
}

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        getOrders: (state, action) => {
            state.orders = action.payload
            state.loading = false
        },
        checkout: (state, action) => {
            state.orders = [action.payload, ...state.orders]
        },
        ordersLoading: (state) => {
            state.loading = true
        }
    }
})

export const { getOrders, checkout, ordersLoading } = orderSlice.actions

export default orderSlice.reducer