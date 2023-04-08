import React, { memo } from "react";
import HeaderCenter from "./c-cnps/header-center";
import HeaderLeft from "./c-cnps/header-left";
import HeaderRight from "./c-cnps/header-right";
import { HeadWrapper } from "./style";

const AppHeader = memo(() => {
  return (
    <HeadWrapper>
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight></HeaderRight>
    </HeadWrapper>
  );
});

export default AppHeader;
