import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import {useSelector,useDispatch} from 'react-redux'
import { fetchRoomList } from '@/store/modules/entire/createAction'
import Pagination from '@mui/material/Pagination';
const EntirePagination = memo(() => {
  const {currentPage,totalCounter}=useSelector((state)=>({
    currentPage:state.entire.currentPage,
    totalCounter:state.entire.totalCounter
  }))
  const count=Math.ceil(totalCounter/20)
  const startCount=currentPage*20+1
  const endCout=(currentPage+1)*20
  const dispatch=useDispatch()
  function handleChangePage(event,newPage)
  {
    window.scrollTo(0,0)
    // console.log("event","newPage",event,newPage);
    dispatch(fetchRoomList(newPage-1))
  }
  return (
    <PaginationWrapper>
       <div className="page-info">
       <Pagination count={count} variant="outlined" color="primary" onChange={handleChangePage} />
       </div>
       <div className="info">
          第 {startCount} - {endCout} 个房源, 共超过 {totalCounter} 个
        </div>
    </PaginationWrapper>
  )
})

export default EntirePagination