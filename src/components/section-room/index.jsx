import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from 'components/room-item';
import { RoomWrapper } from './style';
const SectionRoom = memo((props) => {
  const {roomList=[],itemWidth} = props;
  return (
    <RoomWrapper className='room-list'>
    {
      roomList?.slice(0,8)?.map(item=>{
        return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth}></RoomItem>
      })
    }
  </RoomWrapper>
  )
})

SectionRoom.propTypes = {
  roomList:PropTypes.array
}

export default SectionRoom