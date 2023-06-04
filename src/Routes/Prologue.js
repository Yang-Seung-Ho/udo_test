import styled from "styled-components";
import bgImg from "../Images/prologue.jpeg";
import { motion } from "framer-motion";

const ImgBox = styled(motion.div)`
  width: 70%;
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: 20px;
  animation: fadein 0.7s;
  -webkit-animation: fadein 0.7s; /* Safari and Chrome */
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Img = styled.div`
  position: relative;
  background-image: url(${bgImg});
  height: 100vh;
  background-size: cover;
`;
const ImgCover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const ImgContent = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  color: white;
  z-index: 2;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ImgSpan = styled.span`
  font-size: 24px;
  width: 100%;
  white-space: nowrap;
`;
const ImgP = styled.p`
  margin-top: 24px;
  line-height: 32px;
  font-size: 16px;
  width: 100%;
`;

function Prologue() {
  return (
    <ImgBox>
      <Img>
        <ImgContent>
          <ImgSpan>
            기행 紀行 : 여행하는 동안에 보고, 듣고, 느끼고, 겪은 것을 적은 것.
          </ImgSpan>
          <ImgP>
            우도의 자연을 보고 영감을 얻어 하나하나 정성들여 직접 공간을 만들게
            되었습니다.
            <br /> 바베큐를 할 수 있고 빔프로젝트를 볼 수 있어 편안함과
            액티비티를 동시에 즐길 수 있는
            <br /> 저희 숙소는 하고수동 해수욕장 도보 1분 거리에 위치해 있으며
            <br />
            유명한 카페와 맛집들도 주변에 있어 접근성이 매우 좋습니다.
          </ImgP>
        </ImgContent>
        <ImgCover />
      </Img>
    </ImgBox>
  );
}
export default Prologue;
