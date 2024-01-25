//itemSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    // selectedItem: null,
    loading: false
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        getItems: (state, action) => {
            state.items = action.payload
            state.loading = false
        },
        addItem: (state, action) => {
            state.items = [action.payload, ...state.items]
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item._id!==action.payload)
        },
        updateItem: (state, action) => {
            const {id, data} = action.payload
            state.items = state.items.map(item => item._id === id ? { ...item, ...data } : item)
        },
        itemsLoading: (state) => {
            state.loading = true
        },
        sortItems: (state, action) => {
            const selectedSort = action.payload;
            switch (selectedSort) {
                case 'Most Popular':
                    // Implement sorting logic for Most Popular
                    break;
                case 'New Arrivals':
                    // Implement sorting logic for New Arrivals
                    state.items.sort((a, b) => new Date(a.date) - new Date(b.date));                    
                    break;
                case 'Price: Low to High':
                    // Implement sorting logic for Price: Low to High
                    state.items.sort((a, b) => b.price - a.price);
                    break;
                case 'Price: High to Low':
                    // Implement sorting logic for Price: High to Low
                    state.items.sort((a, b) => a.price - b.price);
                    break;
                default:
                    // Default case or no sorting logic needed
                    break;
            }
        },
    }
})

export const { getItems, addItem, deleteItem, updateItem, itemsLoading, sortItems} = itemSlice.actions

export default itemSlice.reducer