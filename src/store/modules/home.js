import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getGoodPriceInfoList,
  getHighStoreList, 
  getHomeDiscountList,
   getHotRecommendList,
   getLongForList,
   getHomePlusList
} from '@/services/modules/home'
export const fetchHomeAllDataAction = createAsyncThunk("fetchData", (payload, { dispatch }) => {
  getGoodPriceInfoList().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHighStoreList().then(res => {
    dispatch(changeHighStoreInfoAction(res))
  })
  getHomeDiscountList().then(res => {
    dispatch(changeHomeDiscountInfoAction(res))
  })
  getHotRecommendList().then(res => {
    dispatch(changeHomeHotRecommendInfoAction(res))
  })
  getLongForList().then(res=>{
    dispatch(changeLongForInfoAction(res))
  })
  getHomePlusList().then(res=>{
    dispatch(changeHomePlusInfoAction(res))
  })
})
const homeSilce = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {

    },
    highStoreInfo: {

    },
    homeDiscount: {

    },
    homeHotRecommend: {

    },
    longForInfo:{

    },
    homePlusInfo:{

    }
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighStoreInfoAction(state, { payload }) {
      state.highStoreInfo = payload
    },
    changeHomeDiscountInfoAction(state, { payload }) {
      state.homeDiscount = payload
    },
    changeHomeHotRecommendInfoAction(state, { payload }) {
      state.homeHotRecommend = payload
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload
    },
    changeHomePlusInfoAction(state, { payload }) {
      state.homePlusInfo = payload
    },
  },

})

export default homeSilce.reducer
export const {
  changeGoodPriceInfoAction,
  changeHighStoreInfoAction,
  changeHomeDiscountInfoAction,
  changeHomeHotRecommendInfoAction,
  changeLongForInfoAction,
  changeHomePlusInfoAction
} = homeSilce.actions