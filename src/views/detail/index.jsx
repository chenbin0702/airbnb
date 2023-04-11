import React, { memo,shallowEqual } from 'react'
import {useSelector} from 'react-redux'
import DetailPictures from './c-cnps/detail-pictures'
import { DetailWrapper } from './style'
const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  return (
    <DetailWrapper>
     <DetailPictures pictureUrls={detailInfo.picture_urls}> </DetailPictures>
    </DetailWrapper>
  )
})

export default Detail