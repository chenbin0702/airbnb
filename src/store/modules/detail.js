import { createSlice } from '@reduxjs/toolkit'
const detailSilce = createSlice({
  name:'detail',
  initialState:{
 
    detailInfo:{},
    
  },   
  reducers: {
    changeDetailInfoActon(state, { payload }) {
      state.detailInfo = payload
    }
  }
})
export const {changeDetailInfoActon}=detailSilce.actions
export default  detailSilce.reducer