import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderData: []
}

const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers: {
        setitem(state, action) {
            state.orderData.push(action.payload)
        },
        removeItem(state, action) {
            state.orderData = state.orderData.filter(item => item.name !== action.payload.name)
        }
    }
})


export const { setitem,  removeItem} = orderSlice.actions
export default orderSlice.reducer