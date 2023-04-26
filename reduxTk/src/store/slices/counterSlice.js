import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter', 
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        add: (state, action) => {
            state.count += Number(action.payload)
        },
        subtract: (state, action) => {
            state.count -= Number(action.payload)
        }
    }
})

export const { increment, decrement, add, subtract } = counterSlice.actions

export default counterSlice.reducer
