import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  user:null,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    setUser:(state,action)=>{
      state.user=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = counterSlice.actions

export const selectUser=(state) => state.counter.user;


export default counterSlice.reducer