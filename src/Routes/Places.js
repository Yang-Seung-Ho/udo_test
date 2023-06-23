import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../Images/main1.jpeg";
import img2 from "../Images/main2.jpeg";
import img3 from "../Images/main3.jpeg";

const TotalBox = styled.div`
  position: absolute;
  z-index: -1;
  margin-top: 175px;
  margin-left: 36%;
  margin-right: 12%;
  height: auto;
  min-height: 100%;
  padding-bottom: 200px;
  /* background-color: wheat; */
`;
const Title = styled.h1`
  font-size: 18px;
`;
const PlaceFlexBox = styled.div`
  display: flex;
  margin-bottom: 32px;
`;
const MapBox = styled.div`
  width: 80%;
`;
const PlaceInfo = styled.p`
  text-align: justify;
  line-height: 24px;
  font-size: 15px;
`;
const PlaceInfoBox = styled.div`
  padding-right: 12px;
`;
const PlaceTitle = styled.h1`
  padding: 22px 0px 12px 0px;
  font-style: italic;
`;
const PlaceDistance = styled.span`
  padding: 6px 0px 12px 0px;
  font-size: 14px;
  opacity: 0.8;
  display: block;
`;
const SlideImgBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;
const SlideImg = styled(motion.img)`
  width: calc(100% / 3);
  padding: 3px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  :nth-child(2) {
    left: calc(100% / 3);
  }
  :nth-child(3) {
    left: calc(100% / 3 * 2);
  }
`;
// const PageBtn = styled.button`
//   position: absolute;
//   z-index: 10;
//   height: auto;

//   &:first-child {
//     left: 0px; /* 첫 번째 버튼이 왼쪽에 위치하도록 수정 */
//   }
//   &:last-child {
//     right: 0px; /* 마지막 버튼이 오른쪽에 위치하도록 수정 */
//   }
// `;
const offset = 3; //한번에 보여주고싶은 이미지 수
function Places() {
  const imageUrls = [img1, img2, img3, img2, img2, img2, img3, img3, img3];
  const [index, setIndex] = useState(0);
  // const [leaving, setLeaving] = useState(false);
  const [back, setBack] = useState(false);
  // const toggleLeaving = () => setLeaving((prev) => !prev);

  // const increaseIndex = () => {
  //   if (leaving) return;
  //   toggleLeaving();
  //   const totalMovies = imageUrls.length;
  //   const maxIndex = Math.floor(totalMovies / offset) - 1;
  //   setBack(false);
  //   setIndex((prev) => (maxIndex === prev ? 0 : prev + 1));
  // };
  useEffect(() => {
    const totalMovies = imageUrls.length;
    const maxIndex = Math.floor(totalMovies / offset) - 1;
    const timer = setInterval(() => {
      setBack(false);
      setIndex((prev) => (maxIndex === prev ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [imageUrls.length]);
  // const decreaseIndex = () => {
  //   if (leaving) return;
  //   toggleLeaving();
  //   const totalMovies = imageUrls.length;
  //   const maxIndex = Math.floor(totalMovies / offset) - 1;
  //   setBack(true);
  //   setIndex((prev) => (0 === prev ? maxIndex : prev - 1));
  // };

  const BoxVar = {
    invisible: (back) => ({
      opacity: 0,
      transition: { duration: 1 },
    }),
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: (back) => ({
      opacity: 0,
      transition: { duration: 1 },
    }),
  };
  return (
    <>
      <TotalBox>
        <Title>숙소 주변 관광지</Title>
        <PlaceFlexBox>
          <PlaceInfoBox>
            <PlaceTitle>검멀레 해수욕장</PlaceTitle>
            <PlaceDistance>도보 30분, 차량 5~10분 가량</PlaceDistance>
            <PlaceInfo>
              우도의 웅장한 자연입니다. 절벽이 너무 아름다운 곳으로 여름에는
              이곳에서 보트도 즐길 수 있습니다. 절벽 아래쪽은 검은 모래 해변이
              자리 잡고있는 우도의 대표적인 명소입니다. 10월 말에는 동굴에서
              음악회도 열리니 기회가 되신다면 한번쯤 꼭 방문해주세요!
            </PlaceInfo>
          </PlaceInfoBox>
          <MapBox>
            <a
              href="https://map.kakao.com/?urlX=492310&urlY=977&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="350"
                height="220"
                src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=2.5&MX=492310&MY=977&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo"
                style={{ border: "1px solid #ccc" }}
                alt="카카오맵"
              />
            </a>
          </MapBox>
        </PlaceFlexBox>
        <AnimatePresence custom={back}>
          {/* <AnimatePresence onExitComplete={toggleLeaving} custom={back}> */}
          <SlideImgBox
            custom={back}
            key={index}
            variants={BoxVar}
            initial="invisible"
            animate="visible"
            exit="exit"
          >
            {imageUrls
              .slice(index * offset, index * offset + offset)
              .map((imageUrl, subIndex) => (
                <SlideImg
                  key={index * offset + subIndex}
                  src={imageUrl}
                  alt={`Image ${index * offset + subIndex}`}
                  variants={BoxVar}
                  style={{ zIndex: offset - subIndex }}
                />
              ))}
            {/* <PageBtn onClick={decreaseIndex}>Prev</PageBtn>
            <PageBtn onClick={increaseIndex}>Next</PageBtn> */}
          </SlideImgBox>
        </AnimatePresence>
      </TotalBox>
    </>
  );
}
export default Places;
