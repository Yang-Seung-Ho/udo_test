import React from "react";
import img1 from "../Image/Create Motivation/create1.jpg";
import img3 from "../Image/Create Motivation/create3.jpg";
import img4 from "../Image/Create Motivation/create4.jpg";
import img5 from "../Image/Create Motivation/create5.jpg";
import con1 from "../Image/Conv/con1.jpg";
import con2 from "../Image/Conv/con2.jpg";
import emb1 from "../Image/Embrace the Unspoiled Beauty/embrace1.jpg";
import emb2 from "../Image/Embrace the Unspoiled Beauty/embrace2.jpg";
import styled, { css, keyframes } from "styled-components";
import { useEffect } from "react";
import Footer from "../Components/Footer";

import { useMediaQueries } from "../MediaQuery";

function Story() {
  const { isMobile } = useMediaQueries();
  useEffect(() => {
    const images = [img1, img3, img4, img5, con1, con2, emb1, emb2];

    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);
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
    ${(props) => props.theme.mobile`
        animation: ${fadeInAnimation} 0.5s ease-in;
        z-index: 1;
        min-height: 100%;
        padding: 0px 14px;
        position: relative;
        margin : 0;
  `}
  `;
  const NarrativeBox = styled.div`
    width: 100%;
    border-bottom: 1px dotted rgba(0, 0, 0, 0.2);
  `;
  const NarrativeTitle = styled.h1`
    font-size: 18px;
    opacity: 1;
    font-weight: 500;
    padding-bottom: 24px;
    padding-top: 24px;
  `;
  const NarrativeSubTitle = styled.span`
    margin: 12px 0px 24px 0px;
    font-size: 14px;
    font-style: italic;
    border-bottom: 1px solid;
  `;
  const NarrativeImgInfoBox = styled.div`
    padding-top: 24px;
    padding-bottom: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(props) => props.theme.mobile`
    flex-direction: column;
  `}
  `;
  const NarrativeInfo = styled.p`
    width: 57%;
    padding-right: 12px;
    font-size: 14px;
    line-height: 24px;
    opacity: 1;
    text-align: justify;
    height: 100%;
    /* mobile 디바이스에서만 적용될 스타일 */
    ${(props) => props.theme.mobile`
    font-size: 12px;
    width:100%;
    margin-bottom:24px;
  `}
    &:last-child {
      width: 50%;
      ${(props) => props.theme.mobile`
      width:100%;
      
  `}
    }
  `;
  const NarrativeInfoMiddle = styled.p`
    width: 100%;
    padding-right: 12px;
    font-size: 14px;
    line-height: 24px;
    opacity: 1;
    text-align: justify;
    margin-bottom: 32px;
    ${(props) => props.theme.mobile`
    font-size: 12px;
    width:100%;
    margin-bottom:24px;
  `}
  `;
  const CarouselTotalBox = styled.div`
    width: 100%;
    ${(props) => props.theme.mobile`
      // width: 300px; /* 이미지 컨테이너의 너비를 원하는 크기로 설정 */
      // height: 200px; /* 이미지 컨테이너의 높이를 원하는 크기로 설정 */
      // overflow: hidden; /* 이미지를 컨테이너 내부로 잘리도록 설정 */
  `}
  `;
  // 이미지 사이즈 조정
  const LeftImg = styled.img`
    width: 100%;
    height: 100%;

    ${(props) => props.theme.mobile`
      // object-fit: cover; 
      
  `}
  `;
  const CarouselTotalOuterBox = styled.div`
    width: 40%;

    /* 모바일 디바이스에서만 적용되는 스타일 */
    ${(props) => props.theme.mobile`
    width: 100%;
  `}

    &:nth-child(1) {
      width: 90%;
      /* 모바일 디바이스에서만 적용되는 스타일 */
      ${(props) => props.theme.mobile`
      width: 100%;
    `}
    }
  `;
  return (
    <>
      <TotalBox>
        <NarrativeBox>
          <NarrativeTitle>Create Motivation</NarrativeTitle>
          <NarrativeSubTitle>우도 기행의 탄생</NarrativeSubTitle>
          <NarrativeImgInfoBox>
            <NarrativeInfo>
              우도는 저희 아버지의 고향입니다. 어렸을 적 저는 우도에 오는 것을
              매우 싫어했습니다. 어렸을 때부터 청개구리 기질이 남달라 억지로
              어딘가에 가는 것을 싫어했거든요, 그 중에서도 우도는 어린 저에게
              너무 답답한 곳이었습니다. 그런 마음을 가졌던 제가 우연찮은 계기로
              우도에 2년간 살게 되었습니다. 첫 6개월간은 적응이 잘 안돼 힘든
              시간을 보냈었습니다. 그러나 시간이 흘러 1년이 되었을 땐 우도의
              자연들이 눈에 들어오기 시작했습니다. 저희 스테이 앞 하고수동
              해수욕장부터 시작해 서빈백사, 검멀레의 절벽, 그리고 비양도까지. 이
              작은 우도 안에는 4계절 모두 다른 모습을 한 매력적인 자연들이
              존재했습니다. 저는 이런 자연들을 많은 사람들이 봤으면 좋겠다는
              생각으로 저희 스테이를 만들게 되었습니다.
            </NarrativeInfo>
            <CarouselTotalOuterBox>
              <CarouselTotalBox
                id="carouselExampleInterval1"
                className="carousel slide carousel-fade"
                // data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <LeftImg src={img1} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <LeftImg src={img3} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <LeftImg src={img4} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <LeftImg src={img5} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval1"
                  data-bs-slide="prev"
                >
                  <span
                    class="fa-solid fa-chevron-left"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval1"
                  data-bs-slide="next"
                >
                  <span
                    class="fa-solid fa-chevron-right"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </CarouselTotalBox>
            </CarouselTotalOuterBox>
          </NarrativeImgInfoBox>
        </NarrativeBox>
        <NarrativeBox>
          <NarrativeTitle>Conveniently Located Near Hahodong</NarrativeTitle>
          <NarrativeSubTitle>해변을 내다보며 편안한 휴식</NarrativeSubTitle>
          <NarrativeImgInfoBox
            style={{ display: "flex", flexDirection: "column" }}
          >
            <NarrativeInfoMiddle>
              저희 스테이는 하고수동 1분거리에 위치해 있습니다. 하고수동은
              우도에서 몇 안되는 밤에도 불이 켜져있는 가게들이 몰려있는
              곳입니다. 근처에 편의점도 2개나 있어 접근성이 매우 좋답니다.
              바닷가 앞 스테이에서 편안한 휴식을 취해보세요.
            </NarrativeInfoMiddle>
            <CarouselTotalOuterBox style={{ width: isMobile ? "100%" : "90%" }}>
              <CarouselTotalBox
                id="carouselExampleInterval2"
                className="carousel slide carousel-fade"
                // data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <LeftImg src={con1} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <LeftImg src={con2} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval2"
                  data-bs-slide="prev"
                >
                  <span
                    class="fa-solid fa-chevron-left"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval2"
                  data-bs-slide="next"
                >
                  <span
                    class="fa-solid fa-chevron-right"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </CarouselTotalBox>
            </CarouselTotalOuterBox>
          </NarrativeImgInfoBox>
        </NarrativeBox>
        <NarrativeBox style={{ borderBottom: "none" }}>
          <NarrativeTitle>Embrace the Unspoiled Beauty</NarrativeTitle>
          <NarrativeSubTitle>우도를 표현하기 위한 노력들</NarrativeSubTitle>
          <NarrativeImgInfoBox>
            <NarrativeInfo>
              저희 스테이는 자연 그대로를 가져오기 위해 최대한 노력했습니다.
              테이블 또한 우도슬랩이라는 자재들을 사용해 가공이 많이 되지 않은
              자른 그대로의 형태를 띄는 나무들을 사용하였고 스테이 앞 하고수동의
              모래사장을 표현하기 위해 모래들을 굳혀 만든 포토존도 있답니다.
              이외에도 바닥자재 등등 많은 고민들이 있었지만 이런 자연들 중에서도
              가장 마음에 들었던 건 커튼 봉이었습니다. 안방에 있는 커튼봉은
              하루동일 직접 우도를 돌며 찾아다녔답니다. 그 시간이 헛되지 않게
              예쁜 커튼봉이 나와서 너무 만족스럽습니다.
            </NarrativeInfo>
            <CarouselTotalOuterBox>
              <CarouselTotalBox
                id="carouselExampleInterval3"
                className="carousel slide carousel-fade"

                // data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <LeftImg src={emb1} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <LeftImg src={emb2} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval3"
                  data-bs-slide="prev"
                >
                  <span
                    class="fa-solid fa-chevron-left"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval3"
                  data-bs-slide="next"
                >
                  <span
                    class="fa-solid fa-chevron-right"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </CarouselTotalBox>
            </CarouselTotalOuterBox>
          </NarrativeImgInfoBox>
        </NarrativeBox>
        <Footer />
      </TotalBox>
    </>
  );
}
export default Story;
