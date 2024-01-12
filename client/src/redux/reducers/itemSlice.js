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
        // getItem: (state, action) => {
        //     state.selectedItem = action.payload;
        //     state.loading = false;
        // },
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
        }
    }
})

export const { getItems, addItem, deleteItem, updateItem, itemsLoading} = itemSlice.actions

export default itemSlice.reducer