import PropTypes from 'prop-types'
import SectionHeader from 'components/section-header';
import SectionRoom from 'components/section-room';
import React, { memo } from 'react'
import { SectionWrapper } from './style';
import SectionFooter from 'components/section-footer';

const HomeSectionV2 = memo((props) => {
  const {dataInfo} = props;
  return (
    <SectionWrapper>
         <SectionHeader title={dataInfo.title} subtitle={dataInfo.subtitle}></SectionHeader>
          <SectionRoom roomList={dataInfo.list}></SectionRoom>
          <SectionFooter></SectionFooter>
    </SectionWrapper>
  )
})

HomeSectionV2.propTypes = {
  dataInfo:PropTypes.object
}

export default HomeSectionV2