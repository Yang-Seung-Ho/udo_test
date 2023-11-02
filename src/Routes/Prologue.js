import PrologueImg from "../Image/prologue.jpg";

import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
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
  margin-left: 38%;
  margin-right: 12%;
  height: auto;
  min-height: 100%;
  padding-bottom: 200px;
  ${(props) => props.theme.mobile`
        animation: ${fadeInAnimation} 0.5s ease-in;
        z-index: 1;
        min-height: 100%;
        padding: 0px 14px;
        position: relative;
        margin : 0;
        width:100%;
        top:50px;
  `} /* background-color: wheat; */
  ${(props) => props.theme.fullscreen`
    margin-top: 220px;

`}
`;
const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  ${(props) => props.theme.mobile`
  font-size:18px;  
  padding: 24px 0;
`}
  ${(props) => props.theme.fullscreen`
  font-size: 26px;
  font-weight: 600;
`}
`;
const TitleSpan = styled.span`
  margin-left: 4px;
  margin-top: 24px;
  margin-bottom: 32px;
  font-size: 14px;
  font-style: italic;
  ${(props) => props.theme.mobile`
  margin-top: 12px;
  margin-bottom: 24px;
  font-size: 13px;      
`}
  ${(props) => props.theme.fullscreen`
  font-size: 16px;
`}
`;
const TitleP = styled.p`
  margin-left: 4px;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 28px;
  width: 80%;
  ${(props) => props.theme.mobile`
    width: 100%;
    font-size: 12px;
    margin-bottom: 12px;
`}
  ${(props) => props.theme.fullscreen`
  font-size: 15px;
`}
`;
const PresentImgBox = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PresentImg = styled.img`
  width: 100%;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;
const TitleHanja = styled.span`
  font-family: sans-serif;
  font-size: 18px;
  ${(props) => props.theme.mobile`
  font-size:16px;  
`}
  ${(props) => props.theme.fullscreen`
  font-size: 22px;
`}
`;
function Prologue() {
  useEffect(() => {
    const images = [PrologueImg];

    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = PrologueImg;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <>
      <TotalBox>
        <HeaderBox>
          <TitleBox>
            <Title>기행</Title>
            <TitleHanja>紀行</TitleHanja>
          </TitleBox>
          <TitleSpan>
            "여행하는 동안에 보고, 듣고, 느끼고, 겪은 것을 적은 것"
          </TitleSpan>
          <TitleP>
            우도의 자연을 보고 영감을 얻어 하나하나 정성들여 직접 공간을 만들게
            되었습니다.
          </TitleP>
          <TitleP>
            바베큐를 할 수 있고 빔프로젝트를 볼 수 있어 편안함과 액티비티 함을
            동시에 즐길 수 있는 저희 숙소는 하고수동 해수욕장 도보 1분 거리에
            위치해 있으며 유명카페와 맛집들도 주변에 있어 접근성이 매우
            좋습니다.
          </TitleP>
          <PresentImgBox>
            <PresentImg src={PrologueImg} loaded={imageLoaded} />
          </PresentImgBox>
        </HeaderBox>
        <Footer />
      </TotalBox>
    </>
  );
}
export default Prologue;
