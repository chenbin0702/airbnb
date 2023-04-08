import React, { memo } from 'react'
import IconGlobal from '@/assets/svg/icon_global'
import { RightWrapper } from './style'
import IconMeum from '@/assets/svg/icon_meum'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal></IconGlobal>
        </span>
      </div>
      <div className="profile">
        <IconMeum></IconMeum>
        <IconAvatar></IconAvatar>
      </div>
    </RightWrapper>
  )
})

export default HeaderRight