import React, { memo,useEffect} from 'react'
import HomeBanner from './c-cnps/home-banner'
import {useSelector,shallowEqual,useDispatch} from 'react-redux'

import { HomeWrapper } from './style'
import { fetchHomeAllDataAction } from '@/store/modules/home';
import SectionHeader from 'components/section-header';
import RoomItem from '../../components/room-item';

const Home = memo(() => {

  const { goodPriceInfo} = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
  }), shallowEqual)


  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeAllDataAction())
  },[dispatch])
  console.log(goodPriceInfo);
  return (
    
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      
        <div className="content">
          <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} ></SectionHeader>
            <ul className='room-list'>
              {
                goodPriceInfo.list?.slice(0,8)?.map(item=>{
                  return <RoomItem itemData={item} key={item.id}></RoomItem>
                })
              }
            </ul>
          </div>
        
        </div>
      
    </HomeWrapper>  
  )
})

export default Home