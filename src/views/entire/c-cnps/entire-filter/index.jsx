import React, { memo } from 'react'
import { FilterWrapper } from './style'
import classNames from 'classnames'
import data from '@/assets/data/filter_data.json';
import { useState } from 'react';
const EntireFilter = memo(() => {
  const [itemList,setItemList]=useState([])
  function itemClickHandler(item)
  {
    const newList=[...itemList]
    if(itemList.includes(item))
    {
     const itemIndex=itemList.findIndex(item1=>item1===item)
     newList.splice(itemIndex,1)
    }
    else
    {
    newList.push(item)
    }
   
    setItemList(newList)
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {
         data.map(item=>{
          return(
            <div key={item}
            onClick={e=>itemClickHandler(item)}
            className={classNames("item",{active:itemList.includes(item)})}>
              {item}
            </div>
          )
         })
        }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter