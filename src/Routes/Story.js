import React from "react";

import styled from "styled-components";
const TotalFooterBox = styled.div`
  position: absolute;
  z-index: -1;
  margin-top: 175px;
  margin-left: 40%;
  margin-right: 16%;
  height: auto;
  min-height: 100%;
  padding-bottom: 200px;
`;
function Story() {
  return (
    <>
      <TotalFooterBox>
        <h1>Story</h1>
        <h1>Story</h1>
        <h1>Story</h1>
        <h1>Story</h1>
        <h1>Story</h1>
        <h1>Story</h1>
      </TotalFooterBox>
    </>
  );
}
export default Story;
