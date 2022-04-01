import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  user:null,
  loaded:false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    setUser:(state,action)=>{
      state.user=action.payload;
    },
    setLoaded:(state,action)=>{
      state.loaded=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser,setLoaded } = counterSlice.actions

export const selectUser=(state) => state.counter.user;
export const selectLoaded=(state)=>state.counter.loaded;

export default counterSlice.reducer