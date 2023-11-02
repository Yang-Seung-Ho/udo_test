import styled, { keyframes } from "styled-components";
import React from "react";
import Footer from "../Components/Footer";
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const TotalBox = styled.div`
  animation: ${fadeInAnimation} 0.5s ease-in;
  position: absolute;
  z-index: -1;
  margin-top: 175px;
  margin-left: 36%;
  margin-right: 12%;
  height: auto;
  padding-bottom: 200px;
  width: 52%;
  ${(props) => props.theme.mobile`
        animation: ${fadeInAnimation} 0.5s ease-in;
        z-index: 1;
        min-height: 100%;
        padding: 0px 14px;
        position: relative;
        margin : 0;
        width:100%;
        top:50px;
  `}
`;

const Title = styled.h1`
  font-size: 18px;
  ${(props) => props.theme.mobile`
    padding: 24px 0;  
`}
  ${(props) => props.theme.fullscreen`
  font-size: 20px;
`}
`;
const PlaceFlexBox = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 32px;
`;
const PlaceInfo = styled.p`
  text-align: justify;
  line-height: 24px;
  font-size: 15px;
`;
const PlaceInfoBox = styled.div`
  width: 100%;
`;
const PlaceTitle = styled.h1`
  padding: 22px 0px 12px 0px;
  font-style: italic;
  text-align: center;
  font-family: "MaruBuri";
  ${(props) => props.theme.fullscreen`
  padding: 22px 0px 32px 0px;
  font-family: "MaruBuriSemiBold";
  font-size: 18px;
  
`}
`;

const PlaceTotalBox = styled.div`
  position: relative;
  margin-bottom: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:last-child {
    border: none;
    padding-bottom: 150px;
  }
`;
const PlaceInfoUl = styled.ul`
  li {
    margin-bottom: 6px;
    text-align: center;
    ${(props) => props.theme.mobile`
    font-size: 13px;  
`}
    ${(props) => props.theme.fullscreen`
  font-size: 16px;  
  margin-bottom: 8px;
`}
  }
`;
const AttachBox = styled.div`
  margin-top: 36px;
  text-align: center;
  margin-bottom: 36px;
  ${(props) => props.theme.mobile`
    font-size: 14px;  
`}
`;
const AttachSpan = styled.span`
  cursor: pointer;
  border-bottom: 1px solid;
  margin: 0px 4px;
  font-family: "MaruBuriSemiBold";
`;

function Places() {
  const handleButtonClick = () => {
    window.open("https://www.instagram.com/jeju.udo/", "_blank");
  };
  return (
    <>
      <TotalBox>
        <Title>숙소 주변 관광지</Title>
        <PlaceTotalBox>
          <PlaceFlexBox>
            <PlaceInfoBox>
              <PlaceTitle>음식점</PlaceTitle>

              <PlaceInfo>
                <PlaceInfoUl>
                  <li>온오프</li>
                  <li> 회암과 국수군</li>
                  <li>타코밤</li>
                  <li>소섬 소도리 칼국수</li>
                  <li>봉추반점</li>
                  <li>소산도</li>
                </PlaceInfoUl>
              </PlaceInfo>
            </PlaceInfoBox>
            <PlaceInfoBox>
              <PlaceTitle>카페</PlaceTitle>

              <PlaceInfo>
                <PlaceInfoUl>
                  <li>카페살레</li>
                  <li> 블랑로쉐</li>
                  <li>달그리안</li>
                  <li>밤수지</li>
                </PlaceInfoUl>
              </PlaceInfo>
            </PlaceInfoBox>
          </PlaceFlexBox>
          <AttachBox>
            자세한 정보는
            <AttachSpan onClick={handleButtonClick}>이곳</AttachSpan>
            에서 확인해주세요!
          </AttachBox>
        </PlaceTotalBox>

        <Footer />
      </TotalBox>
    </>
  );
}
export default Places;
