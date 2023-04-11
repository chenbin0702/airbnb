import * as actionTypes from './constants';
const initialState = {
  currentPage: 0,//当前页码
  roomList: [],
  totalCounter: 0, //总数
  isLoading: false
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList }
    case actionTypes.CHANGE_TOTAL_COUNTER:
      return { ...state, totalCounter: action.totalCounter }
    case actionTypes.CHANGE_IS_LOADING:
      return { ...state, isLoading: action.isLoading }
    default:
      return state
  }
}
export default reducer