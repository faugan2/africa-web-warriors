import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  user:null,
  loaded:false,
  ajouter:null,
  achats:null,
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
    },
    setAjouter:(state,action)=>{
      state.ajouter=action.payload;
    },
    setAchats:(state,action)=>{
      state.achats=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser,setLoaded,setAjouter,setAchats } = counterSlice.actions

export const selectUser=(state) => state.counter.user;
export const selectLoaded=(state)=>state.counter.loaded;
export const selectAjouter=(state) => state.counter.ajouter;
export const selectAchats=(state) => state.counter.achats;

export default counterSlice.reducer