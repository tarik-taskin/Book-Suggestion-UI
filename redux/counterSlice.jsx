import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    returnCounter: (state) => {
      return state.value
    },
  },
})

export const { increment, decrement, returnCounter } = counterSlice.actions

export default counterSlice.reducer