import React, { memo ,useState,useEffect} from 'react'
import IconGlobal from '@/assets/svg/icon_global'
import { RightWrapper } from './style'
import IconMeum from '@/assets/svg/icon_meum'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  const [showPanle,setShowPanle]=useState(false)
  // 副作用函数
  useEffect(()=>{
    function windowClickHandle()
    {
      setShowPanle(false)
    }
    window.addEventListener("click",windowClickHandle,true)
    return (()=>{
      window.removeEventListener("click",windowClickHandle)
    })
  },[])
  function profileClickHandle()
  {
    setShowPanle(true)
  }
  return (
    <RightWrapper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal></IconGlobal>
        </span>
      </div>
      <div className="profile"  onClick={profileClickHandle}>
        <IconMeum></IconMeum>
        <IconAvatar></IconAvatar>
        {
          showPanle && (
            <div className="panel">
            <div className="top" >
              <div className="item">注册</div>
              <div className="item">登录</div>
            </div>
            <div className="bottom">
               <div className="item">出租房源</div>
               <div className="item">开展体验</div>
               <div className="item">帮助</div>
            </div>
          </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight