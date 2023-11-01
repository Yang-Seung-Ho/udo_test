import img1 from "../Image/Home/home4.jpg";
import img2 from "../Image/Home/home2.jpg";
import img3 from "../Image/Home/home3.jpg";
import img4 from "../Image/Home/home1.jpg";
import img5 from "../Image/Home/home5.jpg";
import img6 from "../Image/Home/home6.jpg";

import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useMediaQueries } from "../MediaQuery";
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
`;
const CarouselExampleIndicators = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const CarouselImg = styled.img`
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
`;
const HomeDiv = styled.div`
  position: absolute;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  color: white;
`;
const HomeFooterBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 8%;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  ${(props) => props.theme.fullscreen`
      padding-bottom: 2.5%;

`}
`;
const HomeTitle = styled.div`
  font-size: 16px;
  font-family: "MaruBuri";
  ${(props) => props.theme.mobile`
    font-size:13px;    
    margin-bottom: 18px;
`}
  ${(props) => props.theme.fullscreen`
    font-family: "MaruBuriSemiBold";
    font-size:20px;    
    margin-bottom: 16px;
    
`}
`;
const HomeInfo = styled.div`
  margin: 36px 0px 24px 0px;
  font-size: 14px;
  font-family: "MaruBuriLight";
  ${(props) => props.theme.mobile`
    font-size:12px;  
    margin: 24px 0px 48px 0px;
`}
  ${(props) => props.theme.fullscreen`
    font-size:16px;  
    margin: 24px 0px 36px 0px;
    font-family: "MaruBuri";

`}
`;

const ToPageBtn = styled.p`
  padding: 12px 22px;
  border: 0.1px solid white;
  font-family: "MaruBuri";

  ${(props) => props.theme.mobile`
    padding: 6px 12px;
    font-size:14px;
`}
  ${(props) => props.theme.fullscreen`
    font-size:17px;  
    margin: 24px 0px 36px 0px;
`}
`;

const ToPageBtnBox = styled.div`
  ${(props) => props.theme.mobile`
    margin-bottom : 36px;
`}
  ${(props) => props.theme.fullscreen`
    margin-bottom : 18px;
`}
`;
const PageSquareBtn = styled.button`
  height: 18px;
  width: 18px;
  margin: 0px 6px;
  /* ${(props) => props.theme.mobile`
    width:12px;
    height: 12px;
    margin: 0px 6px;
`} */
`;
function Home() {
  const { isMobile, isFullScreen } = useMediaQueries();
  useEffect(() => {
    const images = [img1, img2, img3, img4, img5, img6];

    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);
  const dynamicStyles = {
    height: isMobile ? "12px" : "18px",
    width: isMobile ? "12px" : "18px",
    margin: "0px 6px",
  };

  return (
    <>
      <TotalBox>
        <HomeDiv>
          <HomeFooterBox>
            <HomeTitle>
              기행 紀行 : 여행하는 동안에 보고, 듣고, 느끼고, 겪은 것을 적은 것.
            </HomeTitle>
            <HomeInfo>우도의 자연을 담은 공간</HomeInfo>
            <ToPageBtnBox>
              <Link to="/prologue">
                <ToPageBtn>우도 기행</ToPageBtn>
              </Link>
            </ToPageBtnBox>
          </HomeFooterBox>
        </HomeDiv>
        <CarouselExampleIndicators
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-pause="false"
          data-bs-interval="3000"
        >
          <div class="carousel-indicators">
            <PageSquareBtn
              style={dynamicStyles}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></PageSquareBtn>
            <PageSquareBtn
              style={dynamicStyles}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></PageSquareBtn>
            <PageSquareBtn
              style={dynamicStyles}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></PageSquareBtn>
            <PageSquareBtn
              style={dynamicStyles}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></PageSquareBtn>
            <PageSquareBtn
              style={dynamicStyles}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></PageSquareBtn>
            <PageSquareBtn
              style={dynamicStyles}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></PageSquareBtn>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <CarouselImg src={img1} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <CarouselImg src={img2} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <CarouselImg src={img3} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <CarouselImg src={img4} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <CarouselImg src={img5} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <CarouselImg src={img6} className="d-block w-100" alt="..." />
            </div>
          </div>
        </CarouselExampleIndicators>
      </TotalBox>
    </>
  );
}
export default Home;
