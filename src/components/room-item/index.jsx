import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';
import classNames from 'classnames'
import IconArrowLeft from '@/assets/svg/icon_left';
import IconArrowRight from '@/assets/svg/icon-right';
import Indicator from '../../base-ui/indicator';
const RoomItem = memo((props) => {
  const swiperRef = useRef()
  const {itemData,itemWidth="25%",itemClick}=props
  const [selectIndex,setSelectIndex]=useState(0)
  function controlClickHandle(isNext=true)
  {
    if(isNext)swiperRef.current.next()
    else swiperRef.current.prev()
    let nextIndex=isNext?selectIndex+1:selectIndex-1
    if(nextIndex>itemData.picture_urls.length - 1)nextIndex=0
    if(nextIndex<0)nextIndex=itemData.picture_urls.length - 1
    setSelectIndex(nextIndex)
  }
  function itemHandler()
  {
    if(itemClick)itemClick()
  }
  return (
    <ItemWrapper itemWidth={itemWidth}>
      <div className="inner" onClick={itemHandler}>
      {
          !itemData.picture_urls ? 
          <div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div> :
           <div className='slider'>
             <div className='control'>
            <div className="btn left" onClick={e => controlClickHandle(false)}>
              <IconArrowLeft width="24" height="24"/>
            </div>
            <div className="btn right" onClick={e => controlClickHandle(true)}>
              <IconArrowRight
               width="24" height="24"/>
            </div>
          </div>
          <div className='indicator'>
           <Indicator selectIndex={selectIndex}>
              {itemData.picture_urls.map((item,index)=>{
                return(
                  <div className="item" key={index}>
                      <span className={classNames('dot',{active:selectIndex===index})}></span>
                  </div>
                )
              })}
           </Indicator>
          </div>
          <Carousel ref={swiperRef} dots={false}>
            {
              itemData.picture_urls.map((item, index) => {
                return (
                  <div key={index} className="cover">
                    <img src={item} alt="" />
                  </div>
                )
              })
            }
          </Carousel>
         </div>
        }
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