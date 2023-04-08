import React, { memo } from "react";
import IconSearchBar from "@/assets/svg/icon_search_bar";
import { CenterWrapper } from "./style";

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearchBar></IconSearchBar>
        </div>
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
