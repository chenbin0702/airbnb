import React, { memo } from 'react'
import { FooterWrapper } from './style'
import {useNavigate} from 'react-router-dom'
const SectionFooter = memo((props) => {
  const {name} = props;
  let showMessage="查看全部"
  const navigate=useNavigate()
  function goLookAll()
  {
    navigate("/entire")
  }
  if(name)
  showMessage=`查看${name}房源`
  return (
    <FooterWrapper color={name?"#00848A":"#000"}>
      <div className="info" onClick={goLookAll}>
       {showMessage}
      </div>
      <div className="icon">
         {">"}
      </div>
    </FooterWrapper>
  )
})

export default SectionFooter