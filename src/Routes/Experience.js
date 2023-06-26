import { useMemo } from "react";
import img1 from "../Images/main4.jpeg";
import img2 from "../Images/main5.jpeg";
import img3 from "../Images/main6.jpeg";
import { useState, useEffect } from "react";
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
  position: absolute;
  z-index: -1;
  margin-top: 175px;
  margin-left: 36%;
  margin-right: 12%;
  height: auto;
  min-height: 100%;
  padding-bottom: 200px;
  //마진퍼센트값을 뺀 것을 넓이로함 이번만
  width: 52%;
  /* background-color: wheat; */
`;
const ExperienceTotalBox = styled.div`
  padding-bottom: 100px;
  margin-bottom: 100px;
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
  height: 250px;
`;

const RightImgBox = styled.div`
  flex: 1; /* 추가 */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  position: relative;
  height: 200px;
`;
const LeftImgBox = styled.div`
  flex: 1; /* 추가 */
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
const RightImg = styled.img`
  margin-bottom: 36px;
  width: 100%;
  height: 400px;
`;
const InfoBox = styled.div`
  width: 80%;
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
  line-height: 42px;
`;
const CarouselTotalBox = styled.div`
  width: 100%;
`;
function Experience() {
  const FirstimageUrls = useMemo(() => [img1, img2, img3], []);
  const [imageLoaded, setImageLoaded] = useState(false);
  if (imageLoaded) {
    // 아무런 동작 없음
  }
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

  return (
    <>
      <TotalBox>
        <Title>스테이에서의 경험들</Title>
        <InfoNumber>#01</InfoNumber>
        <InfoTitle>빔 프로젝트</InfoTitle>
        <ExperienceTotalBox>
          <LeftImgBox>
            <InfoBox>
              <InfoDetail>
                빔 프로젝터를 통해 영화를 즐기실 수 있습니다.{" "}
              </InfoDetail>
              <InfoDetail>
                뛰어난 화질과 스피커의 풍부한 음향으로 영화관에서와 같은 감동을
                느낄 수 있습니다.
              </InfoDetail>
            </InfoBox>
          </LeftImgBox>
          <RightImgBox>
            <CarouselTotalBox
              id="carouselExampleInterval"
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
                data-bs-target="#carouselExampleInterval"
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
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </CarouselTotalBox>
          </RightImgBox>
        </ExperienceTotalBox>
      </TotalBox>
    </>
  );
}
export default Experience;
