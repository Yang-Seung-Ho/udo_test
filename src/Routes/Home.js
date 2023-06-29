import img1 from "../Images/우도기행 (13).jpg";
import img2 from "../Images/우도기행 (14).jpg";
import React from "react";
import { Link } from "react-router-dom";
// import logo from "../Images/logo.png";
import styled, { keyframes } from "styled-components";

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
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
const HomeDiv = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100vh;
  color: white;
`;
const HomeFooterBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 8%;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const HomeTitle = styled.div`
  font-size: 16px;
  font-family: "MaruBuri";
`;
const HomeInfo = styled.div`
  margin: 36px 0px 24px 0px;
  font-size: 14px;
  font-family: "MaruBuriLight";
`;

const ToPageBtn = styled.p`
  padding: 12px 22px;
  border: 0.1px solid white;
`;
// const HomeUpperBox = styled.div`
// `;
// const HomeLogo = styled.img`
//   position: absolute;
//   left: 0;
//   top: 0;
// `;
function Home() {
  return (
    <>
      <TotalBox>
        <HomeDiv>
          <HomeFooterBox>
            {/* <HomeUpperBox>
              <HomeLogo src={logo}></HomeLogo>
            </HomeUpperBox> */}
            <HomeTitle>
              기행 紀行 : 여행하는 동안에 보고, 듣고, 느끼고, 겪은 것을 적은 것.
            </HomeTitle>
            <HomeInfo>우도의 자연을 담은 공간</HomeInfo>
            <div>
              <Link to="/prologue">
                <ToPageBtn>우도 기행</ToPageBtn>
              </Link>
            </div>
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
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
              style={{
                height: "18px",
                width: "18px",
                margin: "0px 6px",
              }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              style={{ height: "18px", width: "18px", margin: "0px 6px" }}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              style={{ height: "18px", width: "18px", margin: "0px 6px" }}
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <CarouselImg src={img1} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <CarouselImg src={img2} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <CarouselImg src={img1} className="d-block w-100" alt="..." />
            </div>
          </div>
        </CarouselExampleIndicators>
      </TotalBox>
    </>
  );
}
export default Home;
