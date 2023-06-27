import React from "react";
import img1 from "../Images/3.jpg";
import img2 from "../Images/4.jpg";
import img3 from "../Images/img1.jpg";

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
  margin-left: 36%;
  margin-right: 12%;
  height: auto;
  min-height: 100%;

  /* background-color: wheat; */
`;
const NarrativeBox = styled.div`
  padding-top: 48px;
  width: 100%;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.2);
`;
const NarrativeTitle = styled.h1`
  font-size: 18px;
  opacity: 0.8;
  font-weight: 500;
  padding-bottom: 24px;
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
`;
const NarrativeInfo = styled.p`
  width: 50%;
  padding-right: 12px;
  font-size: 14px;
  line-height: 24px;
  opacity: 0.8;
  text-align: justify;
`;
const NarrativeInfoMiddle = styled.p`
  width: 100%;
  padding-right: 12px;
  font-size: 14px;
  line-height: 24px;
  opacity: 0.8;
  text-align: justify;
`;
const CarouselTotalBox = styled.div`
  width: 100%;
`;
// 이미지 사이즈 조정
const LeftImg = styled.img`
  height: 100%;
  min-height: 300px;
  width: 100%;
`;
const CarouselTotalOuterBox = styled.div`
  width: 50%;
`;

function Story() {
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
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="3000">
                    <LeftImg src={img1} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item" data-bs-interval="3000">
                    <LeftImg src={img2} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item" data-bs-interval="3000">
                    <LeftImg src={img3} class="d-block w-100" alt="..." />
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
            <NarrativeInfoMiddle style={{ marginBottom: "32px" }}>
              저희 스테이는 하고수동 1분거리에 위치해 있습니다. 하고수동은
              우도에서 몇 안되는 밤에도 불이 켜져있는 가게들이 몰려있는
              곳입니다. 근처에 편의점도 2개나 있어 접근성이 매우 좋답니다.
              바닷가 앞 스테이에서 편안한 휴식을 취해보세요.
            </NarrativeInfoMiddle>
            <CarouselTotalOuterBox style={{ width: "80%" }}>
              <CarouselTotalBox
                id="carouselExampleInterval2"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="3000">
                    <LeftImg src={img1} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item" data-bs-interval="3000">
                    <LeftImg src={img2} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item" data-bs-interval="3000">
                    <LeftImg src={img3} class="d-block w-100" alt="..." />
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
        <NarrativeBox>
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
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="3000">
                    <LeftImg
                      style={{ minHeight: "200px" }}
                      src={img1}
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item" data-bs-interval="3000">
                    <LeftImg
                      style={{ minHeight: "200px" }}
                      src={img2}
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item" data-bs-interval="3000">
                    <LeftImg
                      style={{ minHeight: "200px" }}
                      src={img3}
                      class="d-block w-100"
                      alt="..."
                    />
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
