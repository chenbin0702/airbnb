import React, { memo, useEffect } from "react";
import HomeBanner from "./c-cnps/home-banner";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { HomeWrapper } from "./style";
import { fetchHomeAllDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cnps/home-section-v1";
import HomeSectionV2 from "./c-cnps/home-section-v2";

const Home = memo(() => {
  const { goodPriceInfo, highStoreInfo, homeDiscount,homeHotRecommend } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highStoreInfo: state.home.highStoreInfo,
      homeDiscount: state.home.homeDiscount,
      homeHotRecommend:state.home.homeHotRecommend,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeAllDataAction());
  }, [dispatch]);
  console.log(goodPriceInfo);
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        <HomeSectionV1 dataInfo={homeDiscount}></HomeSectionV1>
        <HomeSectionV1 dataInfo={homeHotRecommend}></HomeSectionV1>
        <HomeSectionV2 dataInfo={goodPriceInfo}></HomeSectionV2>
        <HomeSectionV2 dataInfo={highStoreInfo}></HomeSectionV2>
      </div>
    </HomeWrapper>
  );
});

export default Home;
