import { useMemo } from "react";
import img1 from "../Images/main4.jpeg";
import img2 from "../Images/main5.jpeg";
import img3 from "../Images/main6.jpeg";
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

  //마진퍼센트값을 뺀 것을 넓이로함 이번만
  width: 52%;
  /* background-color: wheat; */
`;
const OrderList = styled.div`
  text-align: left;
`;
const ExperienceTotalBox = styled.div`
  padding-bottom: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* 추가 */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const Title = styled.h1`
  font-size: 18px;
  text-align: right;
  padding: 12px;
  opacity: 0.8;
`;
const LeftImg = styled.img`
  width: 100%;
  height: 300px;
`;

const RightImgBox = styled.div`
  flex: 1; /* 추가 */
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  width: 100%;
  position: relative;
  height: 200px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
`;
const LeftImgBox = styled.div`
  flex: 1; /* 추가 */
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
const InfoBox = styled.div`
  width: 90%;
  text-align: justify;
`;
const InfoNumber = styled.span`
  font-size: 12px;
  font-style: italic;
  opacity: 0.8;
`;
const InfoTitle = styled.p`
  padding-top: 8px;
  font-size: 20px;
  opacity: 0.7;
  padding-bottom: 24px;
`;
const InfoDetail = styled.p`
  opacity: 0.8;
  font-size: 14px;
  line-height: 32px;
`;
const CarouselTotalBox = styled.div`
  width: 100%;
`;
const ExperienceOuterBox = styled.div``;
function Experience() {
  return (
    <>
      <TotalBox>
        <Title>스테이에서의 경험들</Title>
        <ExperienceOuterBox>
          <OrderList>
            <InfoNumber>#01</InfoNumber>
          </OrderList>
          <ExperienceTotalBox>
            <LeftImgBox>
              <InfoBox>
                <InfoTitle>자쿠지</InfoTitle>
                <InfoDetail>
                  우도기행에서 제공하는 자쿠지는 몸과 마음을 휴식시킬 수 있는
                  특별한 공간입니다. 따뜻한 물에 몸을 담그며 스트레스와 피로를
                  푸는 동시에, 목욕 효과에 의해 피부도 부드러워집니다.
                </InfoDetail>
                <InfoDetail style={{ padding: "12px 0px" }}>
                  자연 속에서 느껴지는 평온과 안정은 여행 중의 여유로움을 한층
                  높여줍니다.
                </InfoDetail>
              </InfoBox>
            </LeftImgBox>
            <RightImgBox>
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
            </RightImgBox>
          </ExperienceTotalBox>
        </ExperienceOuterBox>
        <ExperienceOuterBox>
          <OrderList style={{ textAlign: "right" }}>
            <InfoNumber>#02</InfoNumber>
          </OrderList>
          <ExperienceTotalBox>
            <RightImgBox>
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
            </RightImgBox>
            <LeftImgBox style={{ justifyContent: "flex-end" }}>
              <InfoBox>
                <InfoTitle style={{ textAlign: "right" }}>턴테이블</InfoTitle>
                <InfoDetail>
                  우도기행의 턴테이블은 LP판과 함께 음악을 즐길 수 있습니다..
                  오래된 팝송과 재즈의 따뜻한 음색을 품은 LP판들은 특별한 음악을
                  새롭게 경험할 수 만들어 줍니다.
                </InfoDetail>
                <InfoDetail style={{ padding: "12px 0px" }}>
                  LP판 컬렉션은 계속해서 확장되고 있어, 다양한 장르와 아티스트를
                  만나는 즐거움을 누릴 수 있습니다.
                </InfoDetail>
              </InfoBox>
            </LeftImgBox>
          </ExperienceTotalBox>
        </ExperienceOuterBox>
        <ExperienceOuterBox>
          <OrderList>
            <InfoNumber>#03</InfoNumber>
          </OrderList>
          <ExperienceTotalBox>
            <LeftImgBox>
              <InfoBox>
                <InfoTitle>빔 프로젝트</InfoTitle>
                <InfoDetail>
                  빔 프로젝터를 통해 영화를 즐기실 수 있습니다.{" "}
                </InfoDetail>
                <InfoDetail style={{ padding: "12px 0px" }}>
                  뛰어난 화질과 스피커의 풍부한 음향으로 영화관에서와 같은
                  감동을 느낄 수 있습니다.
                </InfoDetail>
              </InfoBox>
            </LeftImgBox>
            <RightImgBox>
              <CarouselTotalBox
                id="carouselExampleInterval3"
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
            </RightImgBox>
          </ExperienceTotalBox>
        </ExperienceOuterBox>
        <ExperienceOuterBox>
          <OrderList style={{ textAlign: "right" }}>
            <InfoNumber>#04</InfoNumber>
          </OrderList>
          <ExperienceTotalBox>
            <RightImgBox>
              <CarouselTotalBox
                id="carouselExampleInterval4"
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
                  data-bs-target="#carouselExampleInterval4"
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
                  data-bs-target="#carouselExampleInterval4"
                  data-bs-slide="next"
                >
                  <span
                    class="fa-solid fa-chevron-right"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </CarouselTotalBox>
            </RightImgBox>
            <LeftImgBox style={{ justifyContent: "flex-end" }}>
              <InfoBox>
                <InfoTitle style={{ textAlign: "right" }}>바베큐</InfoTitle>
                <InfoDetail>
                  우도기행의 테라스에서 이용 가능한 바베큐입니다. 시설은 가족,
                  친구와 함께 즐기기에 최적화되어 있습니다.
                </InfoDetail>
                <InfoDetail style={{ padding: "12px 0px" }}>
                  웨버 가스 그릴은 편리하고 간편한 조작으로 최고의 맛과 향을
                  제공합니다. 신선한 재료와 바베큐의 조합은 즐거운 모임과 맛있는
                  음식을 만들어낼 수 있습니다.
                </InfoDetail>
              </InfoBox>
            </LeftImgBox>
          </ExperienceTotalBox>
        </ExperienceOuterBox>
        <Footer />
      </TotalBox>
    </>
  );
}
export default Experience;
