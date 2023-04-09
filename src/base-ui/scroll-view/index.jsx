import React, { memo, useEffect, useRef } from 'react'
import { useState } from 'react'
import { ScrollWrapper } from './style'

const ScrollView = memo((props) => {
  const scrollRef=useRef()
  const [showRight,setShowRight]=useState(false)
  const [showLeft,setshowLeft]=useState(false)
  const [index,setIndex]=useState(0)
  const totalDistanceRef=useRef()
  useEffect(()=>{
    const scrollWidth=scrollRef.current.scrollWidth //一共可以滚动宽度
    const clientWidth=scrollRef.current.clientWidth //本身占有的宽度
    const totalDistance=scrollWidth-clientWidth 
    totalDistanceRef.current=totalDistance
    setShowRight(totalDistance>0)
  },[props.children])
  function ClickHandler(isRight)
  {
   const nextIndex=isRight?index+1:index-1
   const nextEl=scrollRef.current.children[nextIndex]
   let offset=nextEl.offsetLeft
   scrollRef.current.style.transform=`translate(-${offset}px)`
   setIndex(nextIndex)
   setshowLeft(offset>0)
   setShowRight(totalDistanceRef.current>offset)
  }
  return (
   <ScrollWrapper>

     {
       showLeft && <div className='control left' onClick={e=>ClickHandler(false)}>{"<"}</div>
       }
       {
       showRight && <div className='control right' onClick={e=>ClickHandler(true)}>{">"}</div>
       }
      
      <div className='content'>
        <div className='scroll' ref={scrollRef}>
          {props.children}
        </div>
      </div>
 
   </ScrollWrapper>
  )
})

export default ScrollView