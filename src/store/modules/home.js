import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {getGoodPriceInfoList} from '@/services/modules/home'
export const fetchHomeAllDataAction = createAsyncThunk("fetchData", (payload, { dispatch }) => {
  getGoodPriceInfoList().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
})
const homeSilce=createSlice({
  name:"home",
  initialState:{
    goodPriceInfo:{

    }
  },
  reducers:{
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
  },

})

export default homeSilce.reducer
export const { 
  changeGoodPriceInfoAction,
} = homeSilce.actions