import styled, { keyframes } from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../Images/main1.jpeg";
import img2 from "../Images/main2.jpeg";
import img3 from "../Images/main3.jpeg";
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
const PlaceTotalBox = styled.div`
  position: relative;
  margin-bottom: 50px;
  padding-bottom: 350px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:last-child {
    border: none;
    padding-bottom: 150px;
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
  const FirstimageUrls = [img1, img1, img1, img1, img1, img1, img1, img1, img1];
  const SecondimageUrls = [
    img2,
    img2,
    img2,
    img2,
    img2,
    img2,
    img2,
    img2,
    img2,
  ];
  const ThirdimageUrls = [img3, img3, img3, img3, img3, img3, img3, img3, img3];
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const loadImages = async () => {
      try {
        const promises = FirstimageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
          });
        });

        await Promise.all(promises);
        setImageLoaded(true);
      } catch (error) {
        console.error("Failed to load images:", error);
      }
    };

    loadImages();
  }, [FirstimageUrls]);
  useEffect(() => {
    const loadImages = async () => {
      try {
        const promises = SecondimageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
          });
        });

        await Promise.all(promises);
        setImageLoaded(true);
      } catch (error) {
        console.error("Failed to load images:", error);
      }
    };

    loadImages();
  }, [SecondimageUrls]);
  useEffect(() => {
    const loadImages = async () => {
      try {
        const promises = ThirdimageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
          });
        });

        await Promise.all(promises);
        setImageLoaded(true);
      } catch (error) {
        console.error("Failed to load images:", error);
      }
    };

    loadImages();
  }, [ThirdimageUrls]);
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
    const totalMovies = FirstimageUrls.length;
    const maxIndex = Math.floor(totalMovies / offset) - 1;
    const timer = setInterval(() => {
      setBack(false);
      setIndex((prev) => (maxIndex === prev ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [FirstimageUrls.length]);
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
        <PlaceTotalBox>
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
              {FirstimageUrls.slice(
                index * offset,
                index * offset + offset
              ).map((imageUrl, subIndex) => (
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
        </PlaceTotalBox>
        <PlaceTotalBox>
          <PlaceFlexBox>
            <PlaceInfoBox>
              <PlaceTitle>비양도</PlaceTitle>
              <PlaceDistance>도보 20분, 차량 5분 가량</PlaceDistance>
              <PlaceInfo>
                방송과 여러 플랫폼으로 많이 알려진 섬속의 섬 비양도입니다.
                방송에서는 일몰 명소로 알려져 있지만 사실 이 곳은 일출
                명소랍니다. 날이 맑을 땐 일출을 꼭 한 번 보시는 걸 추천드립니다!
                물이 차오르는 만조일 때는 등대로 가는 다리가 잠겨 출입이
                힘들수도 있습니다. 참고해서 방문해주세요!
              </PlaceInfo>
            </PlaceInfoBox>
            <MapBox>
              <a
                href="https://map.kakao.com/?urlX=492687&urlY=5687&urlLevel=4&map_type=TYPE_MAP&map_hybrid=false"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="350"
                  height="220"
                  src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=5&MX=492687&MY=5687&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo"
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
              {SecondimageUrls.slice(
                index * offset,
                index * offset + offset
              ).map((imageUrl, subIndex) => (
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
        </PlaceTotalBox>
        <PlaceTotalBox>
          <PlaceFlexBox>
            <PlaceInfoBox>
              <PlaceTitle>산호해변(서빈백사)</PlaceTitle>
              <PlaceDistance>도보 30분, 차량 5~10분 가량</PlaceDistance>
              <PlaceInfo>
                홍조단괴로 이루어진 해변입니다. 이 곳은 비양도와 다르게 일몰
                명소입니다! 저희 스테이에서 정반대에 위치해 있지만 해 질 때 쯤
                가셔서
              </PlaceInfo>
            </PlaceInfoBox>
            <MapBox>
              <a
                href="https://map.kakao.com/?urlX=486770&urlY=2430&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="350"
                  height="220"
                  src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=2.5&MX=486770&MY=2430&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo"
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
              {ThirdimageUrls.slice(
                index * offset,
                index * offset + offset
              ).map((imageUrl, subIndex) => (
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
        </PlaceTotalBox>
      </TotalBox>
    </>
  );
}
export default Places;
