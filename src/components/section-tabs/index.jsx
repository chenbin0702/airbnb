import PropTypes from 'prop-types'
import React, { memo } from 'react'
import classNames from 'classnames'
import { TabsWrapper } from './style'
import { useState } from 'react'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const {tabNames=[],tabClick} = props;

  const [count,setCount] = useState(0);
  function tabChange(index,item)
  {
    setCount(index)
    tabClick(item)
  }
  return (
     <TabsWrapper>
      <ScrollView>
      {
        
        tabNames.map((item,index)=>{
          return(
            <div className={classNames("item", {active: count === index})}
            onClick={e=>tabChange(index,item)}>
              {item}  
            </div>
          )
        })
      }
      </ScrollView>
  
     </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames:PropTypes.array
}

export default SectionTabs