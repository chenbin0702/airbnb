import { getEntireRoomList } from '../../../services/modules/entire';
import * as actionTypes from './constants';
export const changeCurrentPageAction=(currentPage)=>({
   type:actionTypes.CHANGE_CURRENT_PAGE,
   currentPage
})
export const changeRoomListAction=(roomList)=>({
  type:actionTypes.CHANGE_ROOM_LIST,
  roomList
})
export const changeTotalCounterAction=(totalCounter)=>({
  type:actionTypes.CHANGE_TOTAL_COUNTER,
  totalCounter
})
export const changeIsLoadingAction=(isLoading)=>({
  type:actionTypes.CHANGE_IS_LOADING,
  isLoading
})
export const fetchRoomList=(page = 0)=>{
  return async dispatch=>{
    dispatch(changeIsLoadingAction(true))
    const res=await getEntireRoomList(page*20)
    dispatch(changeIsLoadingAction(false))
    const roomList=res.list
    const totalCounter=res.totalCount
    dispatch(changeCurrentPageAction(page))
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCounterAction(totalCounter))
  }
}