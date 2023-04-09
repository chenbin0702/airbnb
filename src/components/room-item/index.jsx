import React, { memo } from 'react'
import { ItemWrapper } from './style'
import Rating from '@mui/material/Rating';
const RoomItem = memo((props) => {
  const {itemData,itemWidth="25%"}=props
  return (
    <ItemWrapper itemWidth={itemWidth}>
      <div className="inner">
        <div className="cover">
            <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">
           {itemData.verify_info.messages.join(".")}
        </div>
        <div className="name">
          {itemData.name}
        </div>
        <div className="price">
          ￥{itemData.price}/晚
        </div>
        <div className="bottom">
        <Rating value={itemData.star_rating??5} precision={0.1} readOnly sx={{fontSize:"12px",color:`${itemData.star_rating_color}`}}></Rating>
        <span className='count'>{itemData.reviews_count}</span>
        <span className='extra'>{itemData.bottom_info?.content}</span>
        </div>
  
      </div>
    </ItemWrapper>
  )
})

export default RoomItem