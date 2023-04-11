import React, { memo } from 'react'
import {useSelector,shallowEqual,useDispatch} from 'react-redux'
import { RoomWrapper } from './style'
import {useNavigate} from 'react-router-dom';
import RoomItem from 'components/room-item';
import { changeDetailInfoActon } from '@/store/modules/detail';
const EntireRoom = memo(() => {
  const {roomList,totalCounter,isLoading}=useSelector((state)=>({
    roomList:state.entire.roomList,
    totalCounter:state.entire.totalCounter,
    isLoading:state.entire.isLoading
  }),shallowEqual)
  const dispatch=useDispatch()
  const navgitor=useNavigate()
  function handlerItemClick(item)
  {
    navgitor('/detail')
    dispatch(changeDetailInfoActon(item))
  }
  return (
    <RoomWrapper>
      <div className="title">
        {totalCounter}多处住宿
      </div>
      <div className="list">
      {roomList.map(item=>{
        return(
          <RoomItem itemWidth="20%" itemData={item} key={item.id} itemClick={e=>handlerItemClick(item)}></RoomItem>
        )
      })}
      </div>
      {
      isLoading && <div className="cover"></div>
      }
     
    </RoomWrapper>
  )
})

export default EntireRoom