import styled, { keyframes } from "styled-components";
// import { useMemo } from "react";
import React from "react";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import img1 from "../Images/main1.jpeg";
// import img2 from "../Images/main2.jpeg";
// import img3 from "../Images/main3.jpeg";
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
  padding-bottom: 200px;
  width: 52%;
`;

const Title = styled.h1`
  font-size: 18px;
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
`;
// const PlaceDistance = styled.span`
//   padding: 6px 0px 12px 0px;
//   font-size: 14px;
//   opacity: 0.8;
//   display: block;
// `;
// const CarouselTotalBox = styled.div`
//   width: 80%;
// `;
// // 이미지 사이즈 조정
// const LeftImg = styled.img`
//   width: 100%;
//   height: 300px;
// `;
// const CarouselTotalOuterBox = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
// `;

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
  }
`;
const AttachBox = styled.div`
  margin-top: 36px;
  text-align: center;
  margin-bottom: 36px;
`;
const AttachSpan = styled.span`
  cursor: pointer;
  border-bottom: 1px solid;
  font-family: "MaruBuriSemiBold";
`;
// const PlaceInfoLi = styled.li``;
function Places() {
  const handleButtonClick = () => {
    {
      window.open("https://www.instagram.com/jeju.udo/", "_blank");
    }
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
              {/* <PlaceDistance>도보 30분, 차량 5~10분 가량</PlaceDistance> */}
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
            자세한 정보는{" "}
            <AttachSpan onClick={handleButtonClick}>이곳</AttachSpan>
            에서 확인해주세요!
          </AttachBox>
          {/* <CarouselTotalOuterBox>
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
                  class="carousel-control-prev-icon"
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
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </CarouselTotalBox>
          </CarouselTotalOuterBox> */}
        </PlaceTotalBox>

        <Footer />
      </TotalBox>
    </>
  );
}
export default Places;
