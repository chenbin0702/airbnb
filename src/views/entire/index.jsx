import React, { memo } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchRoomList } from '@/store/modules/entire/createAction'
import EntireFilter from './c-cnps/entire-filter'
import { EntireWrapper } from './style'
import EntireRoom from './c-cnps/entire-rooms'
import EntirePagination from './c-cnps/entire-pagination'

const Entire = memo(() => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchRoomList())
  },[dispatch])

  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRoom></EntireRoom>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  )
})

export default Entire