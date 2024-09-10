import { createSlice } from '@reduxjs/toolkit'

type TodoItem = string;

export const counterSlice = createSlice({
  name: 'todo',
  initialState: {
    listTodo: ["haha"] as TodoItem[]
  },
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.listTodo.push(action.payload)
    },
    del: (state, action) => {
      state.listTodo.splice(action.payload, 1)
    },
    addTime: state => {
      state.listTodo.push(Date.now().toString())
      
    },
  }
})

// Action creators are generated for each case reducer function
export const { add, addTime, del } = counterSlice.actions

export default counterSlice.reducer