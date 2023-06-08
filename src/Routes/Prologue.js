import styled from "styled-components";
import PrologueImg from "../Images/3.jpg";
import { useState, useEffect } from "react";

const TotalBox = styled.div`
  position: absolute;
  z-index: -1;
  margin-top: 175px;
  margin-left: 40%;
  margin-right: 16%;
  /* background-color: wheat; */
`;
const HeaderBox = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
`;
const TitleSpan = styled.span`
  margin-left: 4px;
  margin-top: 24px;
  margin-bottom: 32px;
  font-size: 14px;
  font-style: italic;
`;
const TitleP = styled.p`
  margin-left: 4px;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 28px;
  width: 80%;
`;
const PresentImgBox = styled.div`
  margin-top: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PresentImg = styled.img`
  width: 100%;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;
function Prologue() {
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
          <Title>기행 紀行</Title>
          <TitleSpan>
            "여행하는 동안에 보고, 듣고, 느끼고, 겪은 것을 적은 것""
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
      </TotalBox>
    </>
  );
}
export default Prologue;
