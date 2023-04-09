import React, { memo } from 'react'
import { SectionWrapper } from './style'

const SectionHeader = memo((props) => {
  let {title,subtitle}=props
  return (
    <SectionWrapper>
      <div className="content">
        <div className='title'>{title}</div>
        {subtitle && <div className='subtitle'>{subtitle}</div>}
      </div>
    </SectionWrapper>
  )
})

export default SectionHeader