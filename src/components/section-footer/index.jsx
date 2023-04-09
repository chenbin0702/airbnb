import React, { memo } from 'react'
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {
  const {name} = props;
  let showMessage="查看全部"

  if(name)
  showMessage=`查看${name}房源`
  return (
    <FooterWrapper color={name?"#00848A":"#000"}>
      <div className="info">
       {showMessage}
      </div>
      <div className="icon">
         {">"}
      </div>
    </FooterWrapper>
  )
})

export default SectionFooter