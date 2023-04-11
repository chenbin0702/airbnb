import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const {selectIndex=0}=props
  const scrollRef=useRef()
  useEffect(()=>{
    const selectElem=scrollRef.current.children[selectIndex]
    const itemLeft=selectElem.offsetLeft
    const itemWidth=selectElem.clientWidth
    const scrollElWidth=scrollRef.current.clientWidth
    const scrollElScroll=scrollRef.current.scrollWidth
    let distance=itemLeft+itemWidth*0.5-scrollElWidth*0.5
    if(distance<0) distance=0
    if(distance>scrollElScroll-scrollElWidth)distance= scrollElScroll-scrollElWidth
    scrollRef.current.style.transform = `translate(${-distance}px)`
  },[selectIndex])
  return (
    <IndicatorWrapper>
      <div className="scroll" ref={scrollRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

export default Indicator