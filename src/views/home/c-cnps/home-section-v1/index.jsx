import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { useState } from "react";
import SectionHeader from 'components/section-header';
import SectionRoom from 'components/section-room';
import SectionTabs from "@/components/section-tabs";
import { SectionWrapper } from "./style";
import { useCallback } from "react";
import SectionFooter from "@/components/section-footer";

const HomeSectionV1 = memo((props) => {
  const { dataInfo } = props;
  const { dest_address = [], dest_list = {} } = dataInfo;
  const tabNames = dest_address.map((item) => item.name);
  tabNames.push("安化")
  const [roomList, setRoomList] = useState([])
  const [name, setName] = useState("");
  useEffect(()=>{
    const name = Object.keys(dest_list??{})[0]
    if (!name) return
    const roomList = dataInfo.dest_list[name]
    setRoomList(roomList)
  },[dataInfo.dest_list, dest_list])
  const tabClickHandle=useCallback((name)=>{
    setName(name)
    setRoomList(dataInfo.dest_list[name])
  },[dataInfo.dest_list])
  return (
    <SectionWrapper>
      <SectionHeader
        title={dataInfo.title}
        subtitle={dataInfo.subtitle}
      ></SectionHeader>
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle }></SectionTabs>
      <SectionRoom roomList={roomList} itemWidth="33.333%"></SectionRoom>
      <SectionFooter name={name}></SectionFooter>
    </SectionWrapper>
  );
});

HomeSectionV1.propTypes = {
  dataInfo: PropTypes.object,
};

export default HomeSectionV1;
